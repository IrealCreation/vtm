import { DisciplineListe, Discipline, disciplines } from "./disciplines";

export const lignees: LigneeListe = {
    "Brujah": {
        nom: "Brujah",
        surnom: "Agitateurs",
        malediction: "La Colère",
        description: "Décrits par certains comme des idéalistes prêts à tout pour défendre leurs valeurs, par d'autres comme des brutes décérébrées ne manquant jamais une occasion de chercher la bagarre, les Brujahs ont assurément un caractère enflammé et ne sont pas à énerver à la légère. Il serait cependant faux de dire qu'ils ne savent parler qu'avec leurs poings : ce sont souvent des meneurs charismatiques, voire des érudits passionnés. Ce que les Brujahs entreprennent, ils le font avec une fougue qui dénote avec la froideur répandue chez les autres caïnites.",
        regle: "Fiers et indomptables, les Brujah ont un bonus à tous leurs jets de résistance aux influences mentales. En contrepartie, ils sont plus enclins à la colère et ont un malus aux jets de résistance à la Frénésie.",
        faction: "Anarchs",
        disciplines: [
            disciplines["Célérité"],
            disciplines["Présence"],
            disciplines["Puissance"]
        ]
    },
    "Gangrel": {
        nom: "Gangrel",
        surnom: "Bestiaux",
        malediction: "L'Animalité",
        description: "Parmi les vampires, les Gangrels sont les plus proches du monde animal et les plus en marge de la civilisation dans laquelle ils peinent souvent à trouver une place. Fussent-ils ermites vagabondant dans les forêts, homme sauvage presque retourné à l'état primitif, ou encore hippie zadiste rêvant d'un société alter-mondialiste, ils puisent bien plus facilement leur inspirations dans la nature et dans les créatures qui la peuplent que dans les humains et les institutions qu'ils ont bâties - au risque de trop se détourner de leur propre humanité.",
        regle: "Lorsque les Gangrel succombent à leur Bête intérieure et entrent en Frénésie, ils acquièrent des caractéristiques animales qui risquent de marquer durablement leur corps comme leur esprit.",
        faction: "Anarchs",
        disciplines: [
            disciplines["Animalisme"],
            disciplines["Fortitude"],
            disciplines["Métamorphose"]
        ]
    },
    "Giovanni": {
        nom: "Giovanni",
        surnom: "Mafiosi",
        malediction: "L'Envie",
        description: "Les Giovannis occupent, à plusieurs titre, une place particulière dans le monde vampirique. Par leur origine, d'abord : ce sont des usurpateurs ayant dérobé leur immortalité à une autre lignée caïnite il y a un demi-millénaire. Par leur mode de reproduction : ils n'engendrent de nouveaux caïnites qu'au sein de leur propre influente famille, choisissant les plus méritants (ou les plus ambitieux). Par leur alignement, enfin : ayant choisi de ne pas prendre part aux luttes entre factions du monde de la nuit, ils profitent de cette position pour commercer avec tous et forment ainsi une sorte de mafia aux desseins les plus sombres.",
        regle: "Progéniture incestueuse d'une influente famille, les Giovanni obtiennent une Ressource supplémentaire de leur choix. La morsure des Giovannis est pour sa victime extrêmement douloureuse et souvent mortelle.",
        faction: "Aucune",
        disciplines: [
            disciplines["Fortitude"],
            disciplines["Nécromancie"],
            disciplines["Puissance"]
        ]
    },
    "Lasombra": {
        nom: "Lasombra",
        surnom: "Ombres",
        malediction: "Les Ténèbres",
        description: "Manipulateurs dont la discrètion égale l'influence, les Lasombras savent que le vrai pouvoir n'est généralement pas là où pointent les projecteurs, mais dans les coulisses. Adeptes d'un darwinisme social assez féroce, il est courant pour eux de soumettre leurs futurs infants à des épreuves pouvant frôler la torture afin d'être certains qu'ils ont en eux ce qu'il faut pour se montrer à la hauteur de leur ambition.",
        regle: "Le corps des Lasombra ne se reflète sur aucune surface et échappe à la plupart des procédés humains de capture de l'image. Il est également plus vulnérable au feu et à la lumière du jour.",
        faction: "Sabbat",
        disciplines: [
            disciplines["Domination"],
            disciplines["Obténébration"],
            disciplines["Occultation"]
        ]
    },
    "Malkavien": {
        nom: "Malkavien",
        surnom: "Lunatiques",
        malediction: "La Folie",
        description: "Dangereux aliénés ou clairvoyants visionnaires ? Une chose est certaine : un Malkavien voit le monde différemment du commun des mortels ou de ses congénères caïnites... Si chaque membre de cette lignée peut être atteint d'un dérangement mental différent (psychopathie, dissociation de la personnalité, paranoïa, dépression et j'en passe), tous ont en commun une certaine forme de prescience qui en fait des conseillers utiles, bien que souvent imprévisibles.",
        regle: "La folie des Malkaviens est un don et une malédiction : si elle leur offre parfois une clairvoyance particulière, elle est avant tout signification de dérangements mentaux incurables.",
        faction: "Camarilla",
        disciplines: [
            disciplines["Aliénation"],
            disciplines["Augure"],
            disciplines["Occultation"]
        ]
    },
    "Nosferatu": {
        nom: "Nosferatu",
        surnom: "Déformés",
        malediction: "La Laideur",
        description: "La malédiction des Nosferatus est celle dont la démonstration est la plus spectaculaire : leur apparence horriblement déformée au moment de l'Étreinte, ils sont contraints de se cacher des humains plus encore que les autres caïnites. Cela fait cependant d'eux d'excellents cambrioleurs, assassins, espions, et (plus récemment) hackers.",
        regle: "Adeptes de la dissimulation ne pouvant se montrer sans conséquence, les Nosferatu ont un talent bonus au choix parmi : Furtivité, Larcin, Technologie.",
        faction: "Camarilla",
        disciplines: [
            disciplines["Animalisme"],
            disciplines["Occultation"],
            disciplines["Puissance"]
        ]
    },
    "Toreador": {
        nom: "Toreador",
        surnom: "Esthètes",
        malediction: "La Vanité",
        description: "Si parmi les caïnites certains restent le plus attachés aux us et coutumes de la société humaines, ce sont bien souvent les Toreadors. Amateurs d'art et de culture, il est fréquent de voir un membre de cette lignée se cacher en pleine lumière dans une position très en vue de mécène, d'impresario, d'artiste voire de célébrité. Chaque Toreador a une affinité particulière avec une forme d'art (que ce soit la musique baroque ou le street-art en passant par la calligraphie) qui le passionne jusqu'à parfois aller à l'obsession.",
        regle: "Artistes parmi les immortels, les Toreadors ont un talent bonus au choix parmi : Performance, Séduction, Culture. Cette passion pour l'art les rend cependant sujets à de soudaines fascinations devant des oeuvres qui les touchent.",
        faction: "Camarilla",
        disciplines: [
            disciplines["Augure"],
            disciplines["Célérité"],
            disciplines["Présence"]
        ]
    },
    "Tremere": {
        nom: "Tremere",
        surnom: "Sorciers",
        malediction: "Le Secret",
        description: "Les vampires sont des individus naturellement portés par le secret, mais en la matière, nul n'égale parmi eux les Tremere. Mystiques et docteurs occupant traditionnellement des positions de gardien du savoir, ce sont les héritiers de générations de mages ayant accumulé la connaissance comme un dragon son trésor. La rumeur dit cependant que les Tremere auraient usurpé leur place en tant que lignée à un autre clan, les Salubri, après les avoir soigneusement discrédités et exterminés... Mais tout Tremere vous répondra que cela n'est que calomnie.",
        regle: "Maîtres de l'usage des disciplines vampiriques, les Tremere ont +1 Point de Sang maximum. Cependant, leur détachement du monde physique et matériel leur retire un Point de Santé maximum.",
        faction: "Camarilla",
        disciplines: [
            disciplines["Augure"],
            disciplines["Domination"],
            disciplines["Thaumaturgie"]
        ]
    },
    "Tzimisce": {
        nom: "Tzimisce",
        surnom: "Déformateurs",
        malediction: "",
        description: "Aux yeux de la plupart des Tzimisces, les humains sont de l'argile pouvant être maniés à loisir. Calmes, froids, réfléchis, les membres de cette lignée ont longtemps été décrits comme statiques et traditionnalistes, engoncés dans leurs forteresses croulantes des Carpathes... Mais ce n'est pas forcément le cas des membres plus jeunes, qui peuvent être portés par la soif d'expérimentation ou l'ambition. Dans tous les cas, les Tzimisces demeurent hautains et sûrs de leur supériorité, n'hésitant pas à dénaturer l'humanité pour la modeler selon leurs desseins.",
        regle: "A force de dénaturer froidement la nature humaine, les Tzimisces commencent avec moins d'Humanité. Leur meilleur attribut mental s'ajoute néanmoins à leur Humanité pour résister à la Frénésie.",
        faction: "Sabbat",
        disciplines: [
            disciplines["Animalisme"],
            disciplines["Augure"],
            disciplines["Vicissitude"]
        ]
    },
    "Ventrue": {
        nom: "Ventrue",
        surnom: "Sang-bleus",
        malediction: "L'Orgueil",
        description: "Si nombreux sont les caïnites à avoir des positions de pouvoir et d'influence dans la politique, la finance ou l'entreprise, rares sont cependant les lignées égaler en cela les Ventrues. Fût-il un prince de sang du XVe siècle attaché à maintenir ses droits féodaux ou une avocate lobbyiste aux dents longues, un Ventrue cherchera avant toute autre chose à accroître son pouvoir matériel comme symbolique, usant pour cela de stratagèmes longuement conçus, d'une langue acérée, ou encore d'une violence physique lorsque nécessaire - bien qu'ils préféreront alors laisser exécuter la basse besogne par d'autres.",
        regle: "Distingués et diplomates, les Ventrues ont un talent bonus au choix parmi : Etiquette, Négociation, Société. Leur goût raffiné les restreint au moment de la morsure : chaque Ventrue ne peut s'abreuver au cou que d'un type de victime précis.",
        faction: "Sabbat",
        disciplines: [
            disciplines["Domination"],
            disciplines["Fortitude"],
            disciplines["Présence"]
        ]
    },
}

export interface LigneeListe {
    [index:string]:Lignee
}

export interface Lignee {
    nom: string;
    surnom: string;
    malediction: string;
    description: string;
    regle: string;
    faction: string;
    disciplines: Array<Discipline>;
}