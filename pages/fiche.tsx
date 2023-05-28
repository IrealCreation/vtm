import FichePerso from "@/components/fichePerso";
import Navbar from "@/components/navbar";
import Head from "next/head";

export default function Example() {
    return(
        <>
            <Head>
                <title key="title">VTM - Fiche de personnage</title>
            </Head>
            <FichePerso />
        </>
        
    )
}