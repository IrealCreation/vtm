import Head from "next/head";
import Link from "next/link";
import LigneeInfo from "@/components/ligneeInfo";
import { lignees } from "@/data/lignees";
import Navbar from "@/components/navbar";

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
                <div className="title-bloc">
                    <div className="title-line"></div>
                    <h1>Lignées</h1>
                    <div className="title-line"></div>
                </div>
                <p>Les vampires, aussi nommés <em>caïnites</em> à cause du mythe qui en fait des descendants de Caïn après que celui-ci ait été maudit par Dieu pour avoir tué son frère, se répartissent en plusieurs &quot;lignées&quot; ou &quot;clans&quot;.</p>
                <p>Lorsqu&apos;un vampire décide d&apos;en engendrer un autre lors d&apos;un processus nommé <em>l&apos;Étreinte</em>, il s&apos;abreuve du sang de sa victime jusqu&apos;à la laisser exsangue puis lui donne à boire son propre flux vital. Le nouveau-né, désigné sous le terme <em>infant</em>, hérite de la lignée de son géniteur, désigné sous le terme de <em>sire</em>.</p>
                <p>Chaque lignée dispose de ses propres spécificités et de ses propres <Link href="/disciplines">disciplines</Link> (capacités surnaturelles à sa disposition). Elles ont également leurs propres traditions internes et leurs propres habitudes transmises de sire à infant. Cependant, le caractère d&apos;un caïnite ne se définit pas uniquement par sa lignée, et il faut se garder de tout stéréotype hâtif.</p>
                {jsxLignees}
            </section>
            <Navbar/>
        </>
        
    )
}