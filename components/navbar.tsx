import Link from "next/link";
import { useState, useEffect } from "react";
import { useIsLogged } from "@/hooks/useIsLogged";

export default function Navbar() {

    const [isLogged, setIsLogged] = useIsLogged();

    let jsxLiens: Array<JSX.Element> = [];
    jsxLiens.push(<li key="index"><Link href="/">Accueil</Link></li>);
    jsxLiens.push(<li key="fiche"><Link href="/fiche">Fiche personnage</Link></li>);

    if(isLogged)
        jsxLiens.push(<li key="des"><Link href="/des">Plateau de dés</Link></li>);

    jsxLiens.push(<li key="documentation"><Link href="/documentation">Documentation</Link></li>);

    if(isLogged)
        jsxLiens.push(<li key="profil"><Link href="/profil">Profil</Link></li>);
    else
        jsxLiens.push(<li key="connexion"><Link href="/connexion">Connexion</Link></li>);

    return(
        <nav className="main-navbar">
            <ul>
                {jsxLiens}
            </ul>
        </nav>
    );
}

