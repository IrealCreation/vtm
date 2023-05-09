export const talents = {
    physique: [
        { 
            nom: "Acrobatie", 
            description: "Sauts et équilibre",
                niveaux: []
        },
        { 
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
        { 
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
        { 
            nom: "Furtivité", 
            description: "Se cacher et rester discret",
                niveaux: []
        },
        { 
            nom: "Larcin", 
            description: "Crochetage et vol à la tir",
                niveaux: []
        },
        { 
            nom: "Mains nues", 
            description: "Se battre avec vos poings et vos crocs",
                niveaux: []
        },
        { 
            nom: "Mêlée", 
            description: "Se battre avec une arme de corps à corps",
                niveaux: []
        },
        {
            nom: "Nature", 
            description: "Vivre et s'adapter dans la nature sauvage",
                niveaux: []
        },
        { 
            nom: "Tir", 
            description: "Se battre avec une arme à distance",
                niveaux: []
        },
    ],
    social: [
        {
            nom: "Bagou",
            description: "Interagir avec la basse société",
                niveaux: []
        },
        {
            nom: "Dressage",
            description: "Interagir avec les animaux",
                niveaux: []
        },
        {
            nom: "Etiquette",
            description: "Interagir avec la haute société",
                niveaux: []
        },
        {
            nom: "Intimidation",
            description: "Contraindre par le chantage ou la menace",
                niveaux: []
        },
        {
            nom: "Négociation",
            description: "Obtenir plus en donnant moins",
                niveaux: []
        },
        {
            nom: "Performance",
            description: "Pratiques artistiques",
                niveaux: []
        },
        {
            nom: "Physionomie",
            description: "Reconnaître et lire les émotions d'autrui",
                niveaux: []
        },
        {
            nom: "Séduction",
            description: "Faire naître l'affection et le désir",
                niveaux: []
        },
        {
            nom: "Tromperie",
            description: "Mentir sans sourciller",
                niveaux: []
        },
    ],
    mental: [
        {
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
        {
            nom: "Enquête",
            description: "Tirer des informations à partir d'une scène",
                niveaux: []
        },
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
            nom: "Vigilance",
            description: "Détecter le monde qui vous entoure",
                niveaux: []
        },
    ]
};

export interface Talent {
    nom: string;
    description: string;
    niveaux: Array<string>;
}