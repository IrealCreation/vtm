import FichePerso from "@/components/fichePerso";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { useIsLogged } from "@/hooks/useIsLogged";
import { useEffect } from "react";
import { Jet } from "@/interfaces/jet";

export default function PageJet() {

    const [isLogged, setIsLogged] = useIsLogged();

    useEffect(() => {
        jet();
    }, []);

    const jet = async (id?: number) => {
        let url: string;
        if(id == null) {
            url = "/api/perso/jet/" ;
        }
        else {
            url = "/api/perso/"+ id +"/jet";
        }
        
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                stat1: "Force",
                stat2: "Vigueur"
            }),
            headers: {
                "content-type": "application/json",
            },
        });
        if(response.ok) {
            const jsonData = await response.json();
            console.log(jsonData);
            const jet = jsonData.jet as Jet;
            console.log(jet);
        }
        else {
            console.log(response);
        }
    }

    return(
        <>
            <Head>
                <title key="title">VTM - Jet</title>
            </Head>
            <section className="main-container">

            </section>
            <Navbar/>
        </> 
    )
}