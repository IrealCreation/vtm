import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return(
        <>
            <section className="index main-container">
              <div className="title-bloc">
                  <div className="title-line"></div>
                  <h1>JdR <br/>Vampire the Masquerade</h1>
                  <div className="title-line"></div>
              </div>
              <Link href="/fiche" className="btn-lg">Fiche personnage (exemple)</Link>
              <Link href="/lignees" className="btn-lg">Lignées</Link>
              <Link href="/disciplines" className="btn-lg">Disciplines</Link>
            </section>
        </>
        
    )
}