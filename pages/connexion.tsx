import Head from "next/head";
import Connexion from "@/components/connexion";
import Navbar from "@/components/navbar";

export default function Example() {
    
    return(
        <>
            <Head>
                <title key="title">VTM - Connexion</title>
            </Head>
            <Connexion />
            <Navbar/>
        </>
    )
}