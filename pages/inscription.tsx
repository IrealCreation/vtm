import Head from "next/head";
import Inscription from "@/components/inscription";
import Navbar from "@/components/navbar";

export default function Example() {
    return(
        <>
            <Head>
                <title key="title">VTM - Inscription</title>
            </Head>
            <Inscription />
        </>
    )
}