import CharacterSheet from "@/components/charactersheet";
import Head from "next/head";

export default function Example() {
    return(
        <>
            <Head>
                <title key="title">VTM - Fiche personnage</title>
            </Head>
            <CharacterSheet />
        </>
        
    )
}