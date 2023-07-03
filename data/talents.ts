import { attributs } from "./attributs";

export const talents:TalentListe = {
    //Physique
    "Acrobatie": { 
        nom: "Acrobatie", 
        description: "Sauts, flexibilité et équilibre",
            niveaux: []
    },
    "Athlétisme": { 
        nom: "Athlétisme", 
        description: "Course, escalade, natation...",
            niveaux: [
                "Vous avez un abonnement à une salle de sport",
                "Vous pratiquez une activité physique régulière",
                "Vous êtes un sportif de compétition",
                "Pour un mort-vivant, vous avez une cardio d'enfer",
                "Les jeux olympiques n'attendent que vous"
            ]
    },
    "Conduite": { 
        nom: "Conduite", 
        description: "Conduire un véhicule motorisé",
            niveaux: [
                "Vous avez votre permis",
                "Vous êtes habitué à faire de la route",
                "Vous êtes un conducteur adroit et chevronné",
                "Vous savez prendre en main tout type d'engin",
                "Vous êtes un pilote d'exception sur terre, mer et dans les airs"
            ]
    },
    "Furtivité": { 
        nom: "Furtivité", 
        description: "Se cacher et rester discret",
            niveaux: []
    },
    "Larcin": { 
        nom: "Larcin", 
        description: "Crochetage et vol à la tir",
            niveaux: []
    },
    "Mains nues": { 
        nom: "Mains nues", 
        description: "Se battre avec vos poings et vos crocs",
            niveaux: [
                "Vous savez mettre une bonne baffe",
                "Vous avez un entraînement de base en art martial",
                "Vous montez sur un tatami ou un ring en compétition",
                "Vous collectionnez les dan sur votre ceinture noire",
                "Vous avez le calibre d'un champion de MMA"
            ]
    },
    "Mêlée": { 
        nom: "Mêlée", 
        description: "Se battre avec une arme de corps à corps",
            niveaux: [
                "Ça, c'est le bout pointu",
                "Vous êtes à l'aise avec une arme au poing",
                "Vous êtes un escrimeur talentueux",
                "Vous pouvez vous bâtir une réputation de maître d'armes",
                "Never bring a gun to your swordfight"
            ]
    },
    "Nature": {
        nom: "Nature", 
        description: "Vivre et s'adapter dans la nature sauvage",
            niveaux: []
    },
    "Tir": { 
        nom: "Tir", 
        description: "Se battre avec une arme à distance",
            niveaux: [
                "Vous avez déjà tenu une arme à feu ou un arc dans vos mains",
                "Vous êtes assez précis avec toutes formes de projectiles",
                "Vous fréquentez régulièrement les stands de tir",
                "Vous avez un entraînement militaire avec les armes à feu",
                "Vous pouvez abattre votre cible à plusieurs centaines de mètres"
            ]
    },
    // Social
    "Bagou": {
        nom: "Bagou",
        description: "Interagir avec la basse société",
            niveaux: []
    },
    "Dressage": {
        nom: "Dressage",
        description: "Interagir avec les animaux",
            niveaux: [
                "Vous avez l'habitude des animaux de compagnie",
                "Vous savez inculquer les bonnes manières à un chien",
                "Vous pouvez approcher un animal sauvage",
                "Vous êtes à l'aise entourés d'animaux exotiques",
                "Vous domptez les fauves en un claquement de doigts"
            ]
    },
    "Etiquette": {
        nom: "Etiquette",
        description: "Interagir avec la haute société",
            niveaux: []
    },
    "Intimidation": {
        nom: "Intimidation",
        description: "Contraindre par le chantage ou la menace",
            niveaux: []
    },
    "Négociation": {
        nom: "Négociation",
        description: "Obtenir plus en donnant moins",
            niveaux: []
    },
    "Performance": {
        nom: "Performance",
        description: "Pratiques artistiques",
            niveaux: [
                "Vous pratiquez une fois par semaine",
                "Votre entourage vous trouve doué dans votre art",
                "Vous pouvez (chichement) gagner votre vie en tant qu'artiste",
                "Vos oeuvres sont reconnues par les experts du milieu",
                "On vous décrit comme le nouveau Picasso ou le nouveau Mozart"
            ]
    },
    "Physionomie": {
        nom: "Physionomie",
        description: "Reconnaître et lire les émotions d'autrui",
            niveaux: []
    },
    "Séduction": {
        nom: "Séduction",
        description: "Faire naître l'affection et le désir",
            niveaux: []
    },
    "Tromperie": {
        nom: "Tromperie",
        description: "Mentir sans sourciller",
            niveaux: []
    },
    // Mental
    "Culture": {
        nom: "Culture",
        description: "Sciences humaines et sociale (histoire, philosophie...)",
            niveaux: [
                "Vous aimez bien regarder Arte",
                "Vous passerez sans problème en fac de sciences humaines",
                "Vous pourriez écrire des articles de vulgarisation",
                "Vous avez de quoi être un conférencier reconnu",
                "Vos écrits seront enseignés aux étudiants des générations futures"
            ]
    },
    "Enquête": {
        nom: "Enquête",
        description: "Tirer des informations à partir d'une scène",
            niveaux: [
                "Vous êtes assez bon en escape game",
                "Vous avez déjà été confronté à une scène de crime",
                "Relever des empreintes, effectuer un prélévement... ça vous connaît",
                "Vous avez un flair de chien policier",
                "Colombo n'a qu'à bien se tenir"
            ]
    },
    "Informatique": {
        nom: "Informatique",
        description: "Maîtriser les technologies numériques",
            niveaux: [
                "Vous êtes à l'aise avec un ordinateur et un smartphone",
                "Vous avez des bases de programmation",
                "Vous avez de quoi vous faire embaucher en tant que développeur",
                "Vous pouvez être un consultant expert en cybersécurité",
                "Vous êtes le nouveau Linus Torvalds"
            ]
    },
    "Mécanique": {
        nom: "Mécanique",
        description: "Comprendre ou assembler des objets et mécanismes",
            niveaux: [
                "Vous sauriez fabriquer un mécanisme simple comme une poulie",
                "Vous pouvez gagner votre vie en tant que garagiste",
                "Vous avez une précision d'horloger",
                "Vous êtes un ingénieur des ponts et chaussées expérimenté",
                "Votre esprit peut imaginer des mécanismes incompréhensibles du commun des mortels"
            ]
    },
    "Médecine": {
        nom: "Médecine",
        description: "Comprendre et soigner le corps",
            niveaux: [
                "Vous savez faire un massage cardiaque",
                "Vous êtes à l'aise avec bandages et garrots",
                "Vous êtes (ou pourriez être) médecin généraliste",
                "Une opération chirurgicale, c'est dans vos cordes",
                "Une transplantation cardiaque sur un comptoir de bar ? Tout de suite !"
            ]
    },
    "Occulte": {
        nom: "Occulte",
        description: "Connaissance du Monde de la Nuit, à la frontière du mythe et du réel",
            niveaux: [
                "Vous avez lu quelques threads Reddit plus ou moins fiables",
                "Vous êtes membre actif de communautés en ligne sur le paranormal",
                "Vous lisez d'obscures ouvrages sur l'ésotérisme",
                "Vous avez une connaissance profonde de ce qui se cache entre les lignes du monde",
                "Le Necronomicon est votre livre de chevet"
            ]
    },
    "Sciences": {
        nom: "Sciences",
        description: "Mathématiques, physique, chimie",
            niveaux: [
                "Vous avez de solides souvenirs des cours de lycée",
                "Vous sortez d'une école d'ingénieur",
                "Vous pourriez soutenir une thèse de doctorat",
                "Niveau d'un scientifique de renom",
                "Le prochain prix Nobel est pour vous"
            ]
    },
    "Société": {
        nom: "Société",
        description: "Connaître les institutions et individus importants de la société humaine",
            niveaux: [
                "Vous suivez la presse quotidienne",
                "Vous êtes en général le mieux informé de votre cercle d'amis sur les actualités",
                "Le droit et les codes de loi sont vos alliés",
                "",
                ""
            ]
    },
    "Vigilance": {
        nom: "Vigilance",
        description: "Détecter le monde qui vous entoure",
            niveaux: []
    },
};

export const talentsPhysique: TalentListe = {
    "Acrobatie": talents["Acrobatie"],
    "Athlétisme": talents["Athlétisme"],
    "Conduite": talents["Conduite"],
    "Furtivité": talents["Furtivité"],
    "Larcin": talents["Larcin"],
    "Mains nues": talents["Mains nues"],
    "Mêlée": talents["Mêlée"],
    "Nature": talents["Nature"],
    "Tir": talents["Tir"],
}

export const talentsSocial: TalentListe = {
    "Bagou": talents["Bagou"],
    "Dressage": talents["Dressage"],
    "Etiquette": talents["Etiquette"],
    "Intimidation": talents["Intimidation"],
    "Négociation": talents["Négociation"],
    "Performance": talents["Performance"],
    "Physionomie": talents["Physionomie"],
    "Séduction": talents["Séduction"],
    "Tromperie": talents["Tromperie"],
}

export const talentsMental: TalentListe = {
    "Culture": talents["Culture"],
    "Enquête": talents["Enquête"],
    "Informatique": talents["Informatique"],
    "Mécanique": talents["Mécanique"],
    "Médecine": talents["Médecine"],
    "Occulte": talents["Occulte"],
    "Sciences": talents["Sciences"],
    "Société": talents["Société"],
    "Vigilance": talents["Vigilance"],
}

export interface TalentListe {
    [index:string]: Talent
}

export interface Talent {
    nom: string;
    description: string;
    niveaux: Array<string>;
}