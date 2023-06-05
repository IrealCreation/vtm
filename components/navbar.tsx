import Link from "next/link";
import { useState, useEffect } from "react";
import { useIsLogged } from "@/hooks/useIsLogged";

export default function Navbar() {
    // const isLogged = id != "";
    // console.log("id : " + id);
    // console.log("isLogged : " + isLogged);

    const [isLogged, setIsLogged] = useIsLogged();

    let jsxConnexion:JSX.Element;
    if(isLogged) {
        jsxConnexion = <li><Link href="#">Profil</Link></li>
        // jsxConnexion = <li><Link href="/connexion">Connexion</Link></li>
    }
    else {
        jsxConnexion = <li><Link href="/connexion">Connexion</Link></li>
    }

    return(
        <nav className="main-navbar">
            <ul>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/fiche">Fiche personnage</Link></li>
                <li><Link href="/lignees">Lignées</Link></li>
                <li><Link href="/disciplines">Disciplines</Link></li>
                <li><Link href="/regles">Règles</Link></li>
                {jsxConnexion}
            </ul>
        </nav>
    );
}

