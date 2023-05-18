import DisciplineInfo from "@/components/disciplineInfo";
import Head from "next/head";
import Link from "next/link";
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
                <div className="title-bloc">
                    <div className="title-line"></div>
                    <h1>Disciplines</h1>
                    <div className="title-line"></div>
                </div>
                <p>Les "disciplines" sont ce que le commun des mortels pourrait appeler les "pouvoirs surnaturels" des vampires. Chaque <Link href="/lignees">lignée</Link> en dispose de trois, mais il est possible pour des caïnites expérimentées d'aller puiser des capacités en-dehors de ce qui est habituellement réservé à leur clan.</p>
                <p>Les disciplines se décomposent en cinq niveaux, chaque niveau offrant un pouvoir spécifique. Seuls les premiers niveaux sont d'abord accessibles aux jeunes vampires avant qu'ils croissent en maturité et en expérience, leur permettant d'accéder à de nouvelles capacités. On raconte même que des caïnites adroits parviendraient à combiner ensemble les pouvoirs de plusieurs disciplines afin d'en crééer de nouvelles...</p>
                <p>L'utilisation d'une discipline n'est pas gratuite : elle va puiser dans la réserve de <em>sang</em> ("Points de Sang", ou "PS") de son lanceur. Cette réserve se reconstitue en se nourissant sur des humains ou des animaux, mais attention : une réserve de sang faible fera encourir le risque de succomber à la <em>Frénésie</em>, cet état où la Bête intérieure du vampire prend le pas sur son esprit rationnel.</p>
                {jsxDisciplines}
            </section>
        </>
        
    )
}