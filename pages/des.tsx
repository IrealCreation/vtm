import FichePerso from "@/components/fichePerso";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { useIsLogged } from "@/hooks/useIsLogged";
import { useEffect } from "react";
import DesJet from "@/components/desJet";

export default function PageJet() {

    const [isLogged, setIsLogged] = useIsLogged();

    return(
        <>
            <Head>
                <title key="title">VTM - Plateau de dés</title>
            </Head>
            <section className="main-container page-des">
                <div className="title-bloc">
                    <div className="title-line"></div>
                    <h1>Plateau de dés</h1>
                    <div className="title-line"></div>
                </div>
                <DesJet isLogged={isLogged} />
            </section>
            <Navbar/>
        </> 
    )
}