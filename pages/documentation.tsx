import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Home() {
    return(
        <>
            <Head>
                <title key="title">VTM - Documentation</title>
            </Head>
            <section className="index main-container">
              <div className="title-bloc">
                  <div className="title-line"></div>
                  <h1>Documentation</h1>
                  <div className="title-line"></div>
              </div>
              <Link href="/lignees" className="btn-lg">Lignées</Link>
              <Link href="/disciplines" className="btn-lg">Disciplines</Link>
              <Link href="/regles" className="btn-lg">Règles de jeu</Link>
            </section>
            <Navbar/>
        </>
        
    )
}