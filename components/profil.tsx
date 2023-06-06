import { useEffect, useState } from "react";
import Link from "next/link";
import TextField from "./fields/textfield"
import { useRouter } from 'next/navigation';
import { useIsLogged } from "@/hooks/useIsLogged";
import { Joueur } from "@/interfaces/joueur";
import { resetCharacter } from "@/redux/store";
import { useDispatch } from 'react-redux'

export default function Profil(props: {pseudo?: string}) {
    const [isLogged, setIsLogged] = useIsLogged();
    const { push } = useRouter();
    const dispatch = useDispatch();

    async function logout() {
        const response = await fetch("/api/joueur/deconnexion", {
            method: "POST",
        });
        console.log(response);
        if(response.ok) {
            dispatch(resetCharacter());
            setIsLogged(false);
            push('/');
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