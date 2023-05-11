import { attributs } from "./attributs";

export const talents:TalentListe = {
    //Physique
    "Acrobatie": { 
        nom: "Acrobatie", 
        description: "Sauts et équilibre",
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
                "Vous pouvez prendre en main tout type d'engin",
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
            niveaux: []
    },
    "Mêlée": { 
        nom: "Mêlée", 
        description: "Se battre avec une arme de corps à corps",
            niveaux: []
    },
    "Nature": {
        nom: "Nature", 
        description: "Vivre et s'adapter dans la nature sauvage",
            niveaux: []
    },
    "Tir": { 
        nom: "Tir", 
        description: "Se battre avec une arme à distance",
            niveaux: []
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
            niveaux: []
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
            niveaux: []
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
                "Vous pouriez écrire des articles de vulgarisation",
                "Vous avez de quoi être un conférencier reconnu",
                "Vos écrits seront enseignés aux étudiants des générations futures"
            ]
    },
    "Enquête": {
        nom: "Enquête",
        description: "Tirer des informations à partir d'une scène",
            niveaux: []
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
                "Vous pourriez soutenir une thése de doctorat",
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
                "Vous avez été actif dans le milieu de la politique",
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