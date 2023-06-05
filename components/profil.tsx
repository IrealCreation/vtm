import { useEffect } from "react";
import Link from "next/link";
import TextField from "./fields/textfield"
import { useRouter } from 'next/navigation';
import { useIsLogged } from "@/hooks/useIsLogged";

export default function Profil(props: {id?: string}) {
    const [isLogged, setIsLogged] = useIsLogged();
    const { push } = useRouter();

    if(!isLogged) {
        push('/connexion');
    }

    useEffect(() => {
        // TODO : récupérer les infos du profil depuis l'API
    }, [])

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

            <button id="envoyer" className="btn-md" onClick={logout}>
                Se déconnecter
            </button>
        </section>
    )
}