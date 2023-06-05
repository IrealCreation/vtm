import FichePerso from "@/components/fichePerso";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { useIsLogged } from "@/hooks/useIsLogged";

export default function Fiche() {

    const [isLogged, setIsLogged] = useIsLogged();
    console.log(isLogged);

    // let jsxFiche: JSX.Element = <></>;
    // if(isLogged) {
    //     jsxFiche = 
    // }
    // else {
    //     jsxFiche = <FichePerso />
    // }

    return(
        <>
            <Head>
                <title key="title">VTM - Fiche de personnage</title>
            </Head>
            <FichePerso isLogged={isLogged} />
            <Navbar/>
        </> 
    )
}