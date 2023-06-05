import FichePerso from "@/components/fichePerso";
import Head from "next/head";
import { useRouter } from 'next/router';
import { redirect } from 'next/navigation';
import Navbar from "@/components/navbar";

export default function Fiche() {
    const router = useRouter();

    const queryId = router.query.id;
    
    let jsxFiche: JSX.Element = <></>;
    if(typeof(queryId) == "string") {
        const id = parseInt(queryId);
        console.log("Router query : " + id);
        jsxFiche = <FichePerso id={id} />
    }
    else {
        redirect("/fiche");
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