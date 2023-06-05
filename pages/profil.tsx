import Navbar from "@/components/navbar";
import Head from "next/head";
import Profil from "@/components/profil";

export default function ProfilPage() {

    return(
        <>
            <Head>
                <title key="title">VTM - Profil de joueur</title>
            </Head>
            <Profil />
            <Navbar/>
        </> 
    )
}