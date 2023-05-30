import Link from "next/link";
import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function Navbar() {

    useEffect(() => {
        const [id, setId] = useLocalStorage<string>("id", "")
        const isLogged = localStorage.getItem("id") != "";
        console.log("isLogged : " + isLogged);
    }, [])
      

    return(
        <nav className="main-navbar">
            <ul>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/fiche">Fiche personnage</Link></li>
                <li><Link href="/lignees">Lignées</Link></li>
                <li><Link href="/disciplines">Disciplines</Link></li>
                <li><Link href="/regles">Règles</Link></li>
                <li><Link href="/connexion">Connexion</Link></li>
            </ul>
        </nav>
    );
}

