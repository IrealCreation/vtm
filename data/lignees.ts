import { DisciplineListe, Discipline, disciplines } from "./disciplines";

export const lignees: LigneeListe = {
    "Brujah": {
        nom: "Brujah",
        surnom: "Agitateurs",
        description: "Fiers et indomptables, les Brujah ont un bonus à tous leurs jets de résistance aux influences mentales. En contrepartie, ils sont plus enclins à la colère et ont un malus aux jets de résistance à la Frénésie.",
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
        description: "Les Gangrel sont les plus proches de l'état animal et de leur Bête intérieure : lorsqu'ils entrent en Frénésie, ils acquièrent des caractéristiques animales qui risquent de marquer durablement leur corps comme leur esprit.",
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
        description: "Famille influente engendrant les caïnites en son sein, les Giovanni obtiennent une Ressource supplémentaire de leur choix. La morsure des Giovannis est pour sa victime extrêmement douloureuse et souvent mortelle.",
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
        description: "Manipulateurs dont la discrètion égale l'influence, le corps des Lasombra ne se reflète sur aucune surface et échappe à la plupart des procédés humains de capture de l'image. Il est également plus vulnérable au feu et à la lumière du jour.",
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
        description: "La folie des Malkaviens est un don et une malédiction : si elle leur offre parfois une clairvoyance particulière, elle est avant tout signification de dérangements mentaux incurables.",
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
        description: "L'apparence des Nosferatus est horriblement déformée lors de leur étreinte : cela les force à se cacher des humains. Par conséquent adeptes de la dissimulation, ils ont un talent bonus au choix parmi : Furtivité, Larcin, Technologie.",
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
        description: "Artistes parmi les immortels, les Toreadors ont un talent bonus au choix parmi : Performance, Séduction, Culture. Cette passion pour l'art les rend sujets à de soudaines fascinations devant des oeuvres qui les touchent.",
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
        description: "Maîtres de l'usage des disciplines vampiriques, les Tremere ont +1 Point de Sang maximum. Cependant, leur détachement du monde physique et matériel leur retire un Point de Santé maximum.",
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
        description: "A force de dénaturer froidement la nature humaine, les Tzimisces commencent avec moins d'Humanité et éprouvent plus de difficulté à l'augmenter. Leur attribut Détermination s'ajoute néanmoins à leur Humanité pour résister à la Frénésie.",
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
        description: "Distingués et diplomates, les Ventrues ont un talent bonus au choix parmi : Etiquette, Négociation, Société. Leur goût raffiné les restreint au moment de la morsure : chaque Ventrue ne peut s'abreuver au cou que d'un type de victime précis.",
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
    description: string;
    faction: string;
    disciplines: Array<Discipline>;
}