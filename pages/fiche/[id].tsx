import FichePerso from "@/components/fichePerso";
import Head from "next/head";
import { useRouter } from 'next/router';

export default function Example() {
    const router = useRouter();

    const id = router.query.id;
    
    let jsxFiche: JSX.Element = <></>;
    if(typeof(id) == "string") {
        console.log("Router query : " + id);
        jsxFiche = <FichePerso id={id} />
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
        </>
        
    )
}