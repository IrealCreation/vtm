import DisciplineInfo from "@/components/disciplineInfo";
import Head from "next/head";
import { disciplines } from "@/data/disciplines";

export default function PageDisciplines() {
    /* Preparing the JSX for Disciplines */
    const jsxDisciplines: Array<JSX.Element> = [];
    
    for (const [name, discipline] of Object.entries(disciplines)) {
        jsxDisciplines.push(
            <DisciplineInfo discipline={discipline} key={name} />
        );
    }

    return(
        <>
            <Head>
                <title key="title">VTM - Disciplines</title>
            </Head>
            <section className="disciplines-liste main-container">
                {jsxDisciplines}
            </section>
        </>
        
    )
}