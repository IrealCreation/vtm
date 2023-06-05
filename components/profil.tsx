import { useEffect, useState } from "react";
import Link from "next/link";
import TextField from "./fields/textfield"
import { useRouter } from 'next/navigation';
import { useIsLogged } from "@/hooks/useIsLogged";
import { Joueur } from "@/interfaces/joueur";

export default function Profil(props: {pseudo?: string}) {
    const [isLogged, setIsLogged] = useIsLogged();

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
                <strong>Pseudo : </strong> {props.pseudo}
            </p>

            <button id="envoyer" className="btn-md" onClick={logout}>
                Se déconnecter
            </button>
        </section>
    )
}