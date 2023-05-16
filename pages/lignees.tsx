import Head from "next/head";
import LigneeInfo from "@/components/ligneeInfo";
import { lignees } from "@/data/lignees";

export default function PageLignees() {
    /* Preparing the JSX for Disciplines */
    const jsxLignees: Array<JSX.Element> = [];
    
    for (const [name, lignee] of Object.entries(lignees)) {
        jsxLignees.push(
            <LigneeInfo lignee={lignee} key={name} />
        );
    }

    return(
        <>
            <Head>
                <title key="title">VTM - Lignées</title>
            </Head>
            <section className="lignees-liste main-container">
                {jsxLignees}
            </section>
        </>
        
    )
}