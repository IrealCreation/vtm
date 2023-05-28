import Navbar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";

export default function PageRegles() {

    return(
        <>
            <Head>
                <title key="title">VTM - Règles</title>
            </Head>
            <section className="regles main-container">
                <div className="title-bloc">
                    <div className="title-line"></div>
                    <h1>Règles de jeu</h1>
                    <div className="title-line"></div>
                </div>
                
                <h2>Succès & Échecs</h2>
                <p>La réussite des diverses actions qu'entreprendra votre personnage se décidera, le plus souvent, au lancer de dés. Les dés utilisés dans Vampire sont des dés à 10 faces : chaque chiffre supérieur ou égal à 6 représente un succès.</p>
                <p>Lorsque vous accomplissez une action, vous allez lancer un <em>groupe</em> de dés dont le nombre dépendra des compétences de votre personnage. Ce nombre s'obtient en additionnant deux éléments de sa fiche personnage : un attribut + un talent, un attribut + une discipline...</p>
                <p>Par exemple, si vous essayer de hacker un site web, il s'agira d'un jet Intelligence + Informatique. Un personnage qui aurait 3 points en Intelligence et 2 points en Informatique lancerait donc 5 dés.</p>
                <p>En fonction de la difficulté de la tâche, il vous faudra obtenir un nombre de succès variable pour réussir votre action. Par exemple, hacker un site de projet étudiant demandera 1 succès ; un site WordPress lambda, 2 succès ; un site conçu par un développeur consciencieux, 3 succès ; un portail gouvernemental, 4 succès ; l'intranet de la NSA, 5 succès.</p>
                <p>En cas de réussite partielle (vous avez quelques succès mais pas assez au regard de la difficulté annoncée), le maître du jeu vous proposera parfois une <em>réussite avec conséquence</em>. Par exemple : vous pénétrez dans le système informatique visé, mais vous laissez derrière vous des traces permettant de vous retrouver...</p>
                <p>Si à l'inverse votre nombre de succès excède la difficulté de la tâche, vous aurez parfois une <em>réussite critique</em> : votre action dépassera les résultats escomptés.</p>

                <h2>Expérience & Niveau</h2>
                <p>Après chaque mission ou aventure, un personnage gagne de l'expérience. Avoir accompli des objectifs annexes au cours de celle-ci, ou être parvenu à ses fins avec brio, peut donner lieu à de l'expérience supplémentaire. Le gain d'expérience est généralement égal entre chaque membre du groupe, mais il peut arriver qu'un personnage s'étant particulièrement démarqué gagne des points bonus.</p>
                <p>Tous les 10 points d'expérience, le personnage gagne un niveau. Le gain de niveau offre les avantages suivants :</p>
                <ul>
                    <li>A chaque niveau <em>pair</em> : un point de Talent supplémentaire, et un point de Santé / Volonté / Sang supplémentaire (au choix).</li>
                    <li>A chaque niveau <em>impair</em> : un point de Discipline supplémentaire.</li>
                </ul>

                <h2>Soif</h2>
                <p>Tout vampire doit se nourrir de sang : cela est un invariable. C'est de ce fluide vital qu'ils tirent leurs pouvoirs, et même l'énergie leur permettant de maintenir leur état à la frontière de la vie et de la mort. La quantité de sang disponible en eux est indiquée par les <em>Points de Sang (PS)</em>.</p>
                <p>Au début de chaque nouvelle nuit, un vampire puise dans cette quantité pour animer son corps : il perd un Point de Sang et régénère un Point de Santé. S'il ne dispose de Point de Sang à dépenser, il doit faire un jet de résistance à la Frénésie.</p>
                <p>Plus la réserve de sang d'un vampire sera faible, plus il sera sujet à la Soif. Celle-ci se matérialise, à chaque lancer de dés, par un ou plusieurs dés de Soif qui viennent se substituer aux dés normaux. Leur fonctionnement est inchangé, sauf si les dés en question tombent sur 1 : cela signifie que la Soif s'éveille.</p>
                <p>Sur un éveil de la Soif, des conséquences fâcheuses liées à vos pulsions viennent s'ajouter à votre action : vous ouvrez le crâne de l'homme que vous vouliez assomer discrètement, vous mordez avec un peu trop d'entrain la personne que vous tentiez de séduire, vous décidez que le livre que vous déchiffrez ne doit tomber en aucune autre mains que les votres et le réduisez en miettes...</p>
                <p>Sur deux éveils de la Soif dans un même jet de dés, votre personnage devra en plus faire un jet de résistance à la Frénésie pour ne pas succomber à sa Bête intérieure.</p>
                <p>Le résultat d'un dé d'éveil de la Soif peut être ignoré en dépensant un Point de Volonté.</p>

                <h2>Chasse</h2>
                <p>S'abreuver de sang humain ou animal est la seule manière d'assouvir sa Soif et de régénérer sa réserve de sang. Néanmoins, cela doit être fait avec une certaine prudence afin de ne pas éveiller la méfiance des humains et de préserver la Mascarade...</p>
                <p>Boire le sang d'animaux ou boire légèrement le sang d'un humain (sans provoquer sa mort) permet de récupérer la moitie de ses Points de Sang (arrondis au supérieur), MAIS il ne sera jamais possible de remplir totalement sa réserve de sang de cette manière : le dernier point restera vide.</p>
                <p>Vider intégralement de son sang un autre être humain permet de récupérer l'intégralité de ses Points de Sang, y compris le dernier point. Cependant, sentir la vie quitter un corps tandis qu'on s'y abreuve est une expérience éprouvante pour les valeurs morales d'un caïnite, et cela risque donc de réduire son <em>Humanité</em>.</p>
                <p>La chasse peut être accomplie lors d'une scène de jeu (par exemple : se nourrir sur un garde d'un complexe que vous infiltrez), ou dans une période de calme. Dans ce second cas, elle sera alors l'objet d'une brève description où le joueur décrit sa tactique, un jet de dés est effectué en fonction de celle-ci, et le maître du jeu décrit son déroulement en fonction du nombre de succès.</p>
                <p>Chasser deux fois au cours d'une seule nuit (même si c'est pour à chaque fois s'abreuver sans tuer) met également en péril l'Humanité du caïnite.</p>

                <h2>Humanité & Frénésie</h2>
                <p>Un vampire est constamment tiraillé entre la Bête prédatrice et assoiffée de sang en son sein, et entre les restes d'Humanités hérités de sa vie passée qu'il doit préserver pour ne pas devenir une créature sauvage cédant au moindre de ses instincts.</p>
                <p>A chaque fois que la Bête s'agite, un caïnite doit faire un <em>jet de résistance à la Frénésie</em> : Sang-froid + Humanité - Bête. S'il réussit, il reste maître de lui-même, mais le marqueur de la Bête avance d'un point. S'il échoue, il succombe à la Frénésie et le marqueur de la Bête revient à 0. Il peut également dépenser un Point de Volonté pour réussir automatiquement.</p>
                <p>En état de Frénésie, le joueur perd partiellement le contrôle de son personnage qui se retrouve guider par ses pulsions bestiales : il risque d'attaquer (y compris ses alliés) s'il est assoiffé, s'enfuir s'il est en danger... Cet état dure un temps variable, mais jamais plus d'une nuit.</p>
                <p>L'Humanité évolue en fonction des actions du joueur. Boire jusqu'à la mort ou commettre des actions contraires à ses valeurs humaines risque de la faire diminuer. Au contraire, se mettre au service de ses principes moraux peut la faire augmenter. Il est cependant bien plus aisé de perdre de l'Humanité que d'en gagner...</p>
            </section>
        </>
        
    )
}