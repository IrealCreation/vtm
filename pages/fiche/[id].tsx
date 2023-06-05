import FichePerso from "@/components/fichePerso";
import Head from "next/head";
import { useRouter } from 'next/router';
import { useJoueurId } from "@/hooks/useJoueurId";

export default function Fiche() {
    const router = useRouter();

    const id = router.query.id;

    const [joueurId, setJoueurId] = useJoueurId();
    console.log(joueurId);
    
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