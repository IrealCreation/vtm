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
        description: "Parmi les vampires, les Gangrel sont les plus proches du monde animal et les plus en marge de la civilisation dans laquelle ils peinent souvent à trouver une place. Fussent-ils ermites vagabondant dans les forêts, homme sauvage presque retourné à l'état primitif, ou encore hippie zadiste rêvant d'un société alter-mondialiste, ils puisent bien plus facilement leur inspirations dans la nature et dans les créatures qui la peuplent que dans les humains et les institutions qu'ils ont bâties - au risque de trop se détourner de leur propre humanité.",
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
        description: "",
        regle: "Manipulateurs dont la discrètion égale l'influence, le corps des Lasombra ne se reflète sur aucune surface et échappe à la plupart des procédés humains de capture de l'image. Il est également plus vulnérable au feu et à la lumière du jour.",
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
        description: "",
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
        description: "",
        regle: "L'apparence des Nosferatus est horriblement déformée lors de leur étreinte : cela les force à se cacher des humains. Par conséquent adeptes de la dissimulation, ils ont un talent bonus au choix parmi : Furtivité, Larcin, Technologie.",
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
        description: "",
        regle: "Artistes parmi les immortels, les Toreadors ont un talent bonus au choix parmi : Performance, Séduction, Culture. Cette passion pour l'art les rend sujets à de soudaines fascinations devant des oeuvres qui les touchent.",
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
        description: "",
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
        description: "",
        regle: "A force de dénaturer froidement la nature humaine, les Tzimisces commencent avec moins d'Humanité et éprouvent plus de difficulté à l'augmenter. Leur attribut Détermination s'ajoute néanmoins à leur Humanité pour résister à la Frénésie.",
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
        description: "",
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