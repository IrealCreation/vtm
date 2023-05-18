import DisciplineInfo from "@/components/disciplineInfo";
import Head from "next/head";
import { useRouter } from 'next/router';
import { disciplines } from "@/data/disciplines";

export default function PageDisciplines() {

    const router = useRouter();
   
    console.log(router.query);
    const queryNom = router.query.nom;
    // const url = new URL(router.basePath);
    // console.log(url.hash);

    /* Preparing the JSX for Disciplines */
    const jsxDisciplines: Array<JSX.Element> = [];

    
    for (const [name, discipline] of Object.entries(disciplines)) {
        jsxDisciplines.push(
            <DisciplineInfo discipline={discipline} key={name} isVisible={name == queryNom} />
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