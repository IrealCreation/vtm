import Link from "next/link";

export default function Navbar() {
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

