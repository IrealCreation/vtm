import { useEffect, useState } from "react";
import Link from "next/link";
import TextField from "./fields/textfield"
import { useRouter } from 'next/navigation';
import { useIsLogged } from "@/hooks/useIsLogged";
import { Joueur } from "@/interfaces/joueur";

export default function Profil(props: {id?: string}) {
    const [isLogged, setIsLogged] = useIsLogged();
    const { push } = useRouter();

    const [pseudo, setPseudo] = useState<string>();

    if(!isLogged) {
        push('/connexion');
    }

    useEffect(() => {
        getProfil();
    }, [])

    const getProfil = async () => {
        
        const response = await fetch("/api/joueur/profil", {
            method: "GET"
        });
        if(response.ok) {
            const data = await response.json();
            const joueur: Joueur = data.joueur;
            // console.log(jsonData);
            // const joueur = JSON.parse(jsonData.joueur);
            // console.log(joueur);
            setPseudo(joueur.pseudo);
        }
        else {
            console.log(response);
        }
    }

    async function logout() {
        const response = await fetch("/api/joueur/deconnexion", {
            method: "POST",
        });
        console.log(response);
        if(response.ok) {
            setIsLogged(false);
        }
    }

    return (
        <section className="main-container">
            <div className="title-bloc">
                <div className="title-line"></div>
                <h1>Profil de joueur</h1>
                <div className="title-line"></div>
            </div>

            <p>
                <strong>Pseudo : </strong> {pseudo}
            </p>

            <button id="envoyer" className="btn-md" onClick={logout}>
                Se déconnecter
            </button>
        </section>
    )
}