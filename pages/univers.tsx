import Navbar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";

export default function PageRegles() {

    return(
        <>
            <Head>
                <title key="title">VTM - Univers</title>
            </Head>
            <section className="regles main-container">
                <div className="title-bloc">
                    <div className="title-line"></div>
                    <h1>Univers du jeu</h1>
                    <div className="title-line"></div>
                </div>
                
                <h2>Présentation</h2>
                <p>L&apos;univers de <em>Vampire - The Masquerade</em> est extrêmement proche du notre et, à vrai dire, pourrait être le notre. Vous pourriez y vivre, menant votre existence exactement comme vous la menez présentement, sans avoir la moindre connaissance du monde qui se cache dans les ombres et recoins des lieux que vous arpentez...</p>
                <p>Car la principale spécificité de cet univers, et ce qui d&apos;ailleurs lui donne son nom, est le <strong>&quot;Monde des Ténèbres&quot;</strong>, qui désigne tout un pan de la réalité demeurant inconnu et caché de la grande majorité des êtres humains qui vivent paisiblement leur vie et qui n&apos;apparaît en général qu&apos;au travers des contes, mythes et légendes urbaines.</p>
                <p>C&apos;est dans ce Monde des Ténèbres qu&apos;évoluent les <strong>vampires</strong>, objet de nombre de ces récits, et que vous allez avoir l&apos;occasion d&apos;incarner.</p>

                <h2>Qu&apos;est-ce qu&apos;un vampire ?</h2>
                <p>Les vampires - ou <strong>&quot;caïnites&quot;</strong> comme ils préfèrent eux-mêmes souvent se désigner - correspondent en de nombreux points à l&apos;image que s&apos;en font les récits humains. Créatures fuyant la lumière du soleil et devant s&apos;abreuver de sang pour survivre, dangereux prédateurs dotés de pouvoirs surnaturels, la majorité du folklore qui les concerne est vrai. Si certains restent fidèle à l&apos;imaginaire qui fait d&apos;eux des seigneurs passéiste dans leurs châteaux, la plupart se sont adaptés à la société moderne et à ses codes, et vous les retrouverez dans les conseils d&apos;administration du CAC 40 ou dans des groupes de black metal.</p>
                <p>Tout caïnite est un ancien humain qui a été transformé dans un processus que l&apos;on nomme <strong>l&apos;Étreinte</strong>, qui implique pour un vampire de quasiment vider de son sang sa proie avant de l&apos;abreuver du sien. Le caïnite nouvellement créé est désigné comme <strong>infant</strong>, et celui qui l&apos;a créé est son <strong>sire</strong>.</p>
                <p>Une fois transformé, un caïnite se retrouve confronté à la <strong>Soif</strong>, cette pulsion quasiment animale qui le pousse à s&apos;abreuver de sang d&apos;êtres vivants, et qui constitue le trait prédominant de la <strong>Bête</strong> en son sein. Pour contrebalancer ces aspects, il est important de préserver dans une certaine mesure son <strong>Humanité</strong> ; celle-ci peut prendre plusieurs formes selon les individus - codes moraux, préceptes religieux, philosophie éthique, attachements émotionnels - mais elle permet dans tous les cas de ne pas se transformer en monstre féral incapable de contrôler ses pulsions.</p>
                <p>La légende raconte que le premier vampire de l&apos;histoire fut Caïn - d&apos;où le nom de caïnite. Selon la Bible, ce fils d&apos;Adam fut le premier meurtrier de l&apos;humanité et assassinant son frère Abel : pour punition Dieu le condamna à errer la terre sans repos et en n&apos;y semant que la mort. Caïn engendra quatre descendants à son image, puis ceux-ci engendrèrent à leur tour, et c&apos;est de cela que découlent les lignées vampiriques.</p>

                <h2>Lignées et disciplines</h2>
                <p>Si tous les vampires partagent des points communs, ils se démarquent cependant en plusieurs <strong><Link href="/lignees">lignées</Link></strong> ayant leurs propres caractéristiques - selon les traditionnalistes, chacune de ces lignées incarne une variation de la malédiction divine s&apos;étant abattue sur leur race. La lignée s&apos;hérite par le sang : si telle était la lignée du sire, telle sera la lignée de l&apos;infant.</p>
                <p>Chaque lignée est pourvue d&apos;une tare qui lui est propre, et possède ses propres <strong><Link href="/disciplines">disciplines</Link></strong> : ce terme désigne les capacités pouvant être qualifiées de surnaturelles qu&apos;un caïnite peut développer. Chaque lignée dispose de trois disciplines - certaines lui sont propres, d&apos;autres sont partagées - et on raconte que les caïnites les plus adroits peuvent développer des pouvoirs au-delà de celles-ci.</p>
                <p>Pour utiliser ces capacités, un vampire doit cependant puiser dans une réserve vitale qui&apos;il ne peut reconstituer que d&apos;une seule manière : par la chasse, en s&apos;abreuvant du sang d&apos;une victime. Plus il y puisera, et plus sa soif se fera sentir...</p>

                <h2>Société vampirique</h2>
                <p>Si les vampires représentent un danger sérieux pour tout humain dont ils décideraient de faire leur victime, ils savent qu&apos;ils ne sont de taille à résister à l&apos;humanité toute entière si celle-ci venait à apprendre au grand jour leur existence et décidait d&apos;y mettre un terme. Plusieurs fois par le passé, de terribles inquisitions ont entraîné la mort d&apos;innombrables caïnites. C&apos;est pour cela qu&apos;il a été décidé que la meilleure armure serait celle du secret et qu&apos;un code a été instauré afin de faire respecteur celui-ci : la <strong>Mascarade</strong>. Ce code énonce que tout vampire risquant de dévoiler trop largement son existence aux humains devrait être mis à mort par ses pairs.</p>
                <p>Les caïnites sont des prédateurs par nature solitaire, mais ils savent que l&apos;union fait également la force. Un ordre social s&apos;est instauré parmi eux, fondé principalement sur le pouvoir de l&apos;ancienneté et sur des rapports de fidélité de style féodal. Deux clans ont pris forme aux alentours du XVe siècle, quand la Mascarade s&apos;est instaurée : la <strong>Camarilla</strong> et le <strong>Sabbat</strong>, désormais ennemis mortels mais dont la structure se ressemble pourtant beaucoup.</p>
                <p>Aujourd&apos;hui, la Camarilla contrôle la majorité de l&apos;Occident. Son ordre hiérarchique est centré sur des villes contrôlées chacunes par un Prince, monarque théoriquement absolu mais devant veiller à l&apos;équilibre des forces et à la satisfaction de ses soutiens. Chaque sire est responsable de son infant et dispose d&apos;une autorité totale sur lui, y compris du droit de le mettre à mort s&apos;il ne satisfait à ses attentes.</p>
                <p>Une troisième faction s&apos;est formée en opposition à cet ordre gérontocratique et monarchique, prônant des valeurs plus égalitaires et démocratiques : les <strong>Anarchs</strong>. Leur situation varie de la coexistence pacifique à la rébellion ouverte en fonction des villes, fussent-elles contrôlées par la Camarilla ou le Sabbat.</p>

                <h2>Crédits</h2>
                <p>Cet univers est fondé de façon presque intégrale sur le <em>World of Darkness</em> de <em>White Wolf Publishing</em>, éditeur du jeu <em>Vampire - The Masquerade</em>. Ce site consiste en un usage non-commercial de leur création, dans un but d&apos;accompagnement de joueurs et des maîtres du jeu.</p>
                <p>Le contenu de ce site offre cependant ma propre vision et interprétation de cet univers et de ses mécaniques de jeu, se permettant parfois d&apos;en diverger sciemment. N&apos;hésitez pas à consulter d&apos;autres ressources de jeu du <em>World of Darkness</em> si vous le souhaitez, mais en cas de désaccord flagrant entre les énoncés, ma version fera foi dans mon jeu de rôle ;)</p>
            </section>
            <Navbar/>
        </>
        
    )
}