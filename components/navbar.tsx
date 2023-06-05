import Link from "next/link";
import { useState, useEffect } from "react";
import { useJoueurId } from "@/hooks/useJoueurId";

export default function Navbar() {
    // const isLogged = id != "";
    // console.log("id : " + id);
    // console.log("isLogged : " + isLogged);

    const [joueurId, setJoueurId] = useJoueurId();
    console.log(joueurId);

    let jsxConnexion:JSX.Element;
    if(joueurId) {
        jsxConnexion = <li><Link href="#">Profil</Link></li>
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

