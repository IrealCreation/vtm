import FichePerso from "@/components/fichePerso";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { useJoueurId } from "@/hooks/useJoueurId";

export default function Fiche() {

    const [joueurId, setJoueurId] = useJoueurId();
    console.log(joueurId);

    let jsxFiche: JSX.Element = <></>;
    if(joueurId != null && joueurId != "") {
        jsxFiche = <FichePerso id={joueurId} />
    }
    else {
        jsxFiche = <FichePerso />
    }

    return(
        <>
            <Head>
                <title key="title">VTM - Fiche de personnage</title>
            </Head>
            {jsxFiche}
            <Navbar/>
        </> 
    )
}