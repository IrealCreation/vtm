import DisciplineInfo from "@/components/disciplineInfo";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
import { disciplines } from "@/data/disciplines";
import Navbar from "@/components/navbar";

export default function PageDisciplines() {

    const router = useRouter();
   
    const queryNom = router.query.nom;

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
                <p>Les &quot;disciplines&quot; sont ce que le commun des mortels pourrait appeler les &quot;pouvoirs surnaturels&quot; des vampires. Chaque <Link href="/lignees">lignée</Link> en dispose de trois, mais il est possible pour des caïnites expérimentées d&apos;aller puiser des capacités en-dehors de ce qui est habituellement réservé à leur clan.</p>
                <p>Les disciplines se décomposent en cinq niveaux, chaque niveau offrant un pouvoir spécifique. Seuls les premiers niveaux sont d&apos;abord accessibles aux jeunes vampires avant qu&apos;ils croissent en maturité et en expérience, leur permettant d&apos;accéder à de nouvelles capacités. On raconte même que des caïnites adroits parviendraient à combiner ensemble les pouvoirs de plusieurs disciplines afin d&apos;en crééer de nouvelles...</p>
                <p>L&apos;utilisation d&apos;une discipline n&apos;est pas gratuite : elle va puiser dans la réserve de <em>sang</em> (Points de Sang, ou &quot;PS&quot;) de son lanceur. Cette réserve se reconstitue en se nourissant sur des humains ou des animaux, mais attention : une réserve de sang faible fera encourir le risque de succomber à la <em>Frénésie</em>, cet état où la Bête intérieure du vampire prend le pas sur son esprit rationnel.</p>
                {jsxDisciplines}
            </section>
        </>
        
    )
}