import Navbar from "@/components/navbar";
import Head from "next/head";
import Profil from "@/components/profil";
import { useRouter } from 'next/navigation';
import { useIsLogged } from "@/hooks/useIsLogged";
import { Joueur } from "@/interfaces/joueur";
import { useState, useEffect } from "react";

export default function ProfilPage() {
    
    const [isLogged, setIsLogged] = useIsLogged();
    const { push } = useRouter();

    const [pseudo, setPseudo] = useState<string>();

    useEffect(() => {
        getProfil();

        if(!isLogged) {
            push('/connexion');
        }
    }, [isLogged])

    const getProfil = async () => {
        const response = await fetch("/api/joueur/profil", {
            method: "GET"
        });
        if(response.ok) {
            const data = await response.json();
            const joueur: Joueur = data.joueur;
            setPseudo(joueur.pseudo);
        }
        else {
            console.log(response);
        }
    }

    return(
        <>
            <Head>
                <title key="title">VTM - Profil de joueur</title>
            </Head>
            <Profil pseudo={pseudo} />
            <Navbar/>
        </> 
    )
}