import Link from "next/link";
import Navbar from "@/components/navbar";
import { useIsLogged } from "@/hooks/useIsLogged";

export default function Home() {

    const [isLogged, setIsLogged] = useIsLogged();

    const jsxLiens: Array<JSX.Element> = [];

    if(isLogged) {
        jsxLiens.push(<Link key="fiche" href="/fiche" className="btn-lg">Fiche personnage</Link>);
        jsxLiens.push(<Link key="des" href="/des" className="btn-lg">Plateau des dés</Link>);
        jsxLiens.push(<Link key="documentation" href="/documentation" className="btn-lg">Documentation</Link>);
        jsxLiens.push(<Link key="profil" href="/profil" className="btn-lg">Profil</Link>);
    }
    else {
        jsxLiens.push(<Link key="fiche" href="/fiche" className="btn-lg">Fiche personnage (exemple)</Link>);
        jsxLiens.push(<Link key="documentation" href="/documentation" className="btn-lg">Documentation</Link>);
        jsxLiens.push(<Link key="connexion" href="/connexion" className="btn-lg">Connexion</Link>);
        jsxLiens.push(<Link key="inscription" href="/inscription" className="btn-lg">Inscription</Link>);
    }

    return(
        <>
            <section className="index main-container">
              <div className="title-bloc">
                  <div className="title-line"></div>
                  <h1>JdR <br/>Vampire the Masquerade</h1>
                  <div className="title-line"></div>
              </div>
              {jsxLiens}
            </section>
            <Navbar/>
        </>
        
    )
}