const competences = {
    physique: [
        { titre: "Acrobatie", 
            tooltip: {
                label: "Sauts et équilibre",
                niveaux: []
            }
        },
        { titre: "Athlétisme", 
            tooltip: {
                label: "Course, escalade, natation...",
                niveaux: [
                    "Vous avez un abonnement à une salle de sport",
                    "Vous pratiquez une activité physique régulière",
                    "Vous êtes un sportif de compétition",
                    "Pour un mort-vivant, vous avez une cardio d'enfer",
                    "Les jeux olympiques n'attendent que vous"
                ]
            }
        },
        { titre: "Conduite", 
            tooltip: {
                label: "Conduire un véhicule motorisé",
                niveaux: [
                    "Vous avez votre permis",
                    "Vous êtes habitué à faire de la route",
                    "Vous êtes un conducteur adroit et chevronné",
                    "Vous pouvez prendre en main tout type d'engin",
                    "Vous êtes un pilote d'exception sur terre, mer et dans les airs"
                ]
            }
        },
        { titre: "Furtivité", 
            tooltip: {
                label: "Se cacher et rester discret",
                niveaux: []
            }
        },
        { titre: "Larcin", 
            tooltip: {
                label: "Crochetage et vol à la tir",
                niveaux: []
            }
        },
        { titre: "Mains nues", 
            tooltip: {
                label: "Se battre avec vos poings et vos crocs",
                niveaux: []
            }
        },
        { titre: "Mêlée", 
            tooltip: {
                label: "Se battre avec une arme de corps à corps",
                niveaux: []
            }
        },
        { titre: "Nature", 
            tooltip: {
                label: "Vivre et s'adapter dans la nature sauvage",
                niveaux: []
            }
        },
        { titre: "Tir", 
            tooltip: {
                label: "Se battre avec une arme à distance",
                niveaux: []
            }
        },
    ],
    social: [
        {
            titre: "Bagou",
            tooltip: {
                label: "Interagir avec la basse société",
                niveaux: []
            }
        },
        {
            titre: "Dressage",
            tooltip: {
                label: "Interagir avec les animaux",
                niveaux: []
            }
        },
        {
            titre: "Etiquette",
            tooltip: {
                label: "Interagir avec la haute société",
                niveaux: []
            }
        },
        {
            titre: "Intimidation",
            tooltip: {
                label: "Contraindre par le chantage ou la menace",
                niveaux: []
            }
        },
        {
            titre: "Négociation",
            tooltip: {
                label: "Obtenir plus en donnant moins",
                niveaux: []
            }
        },
        {
            titre: "Performance",
            tooltip: {
                label: "Pratiques artistiques",
                niveaux: []
            }
        },
        {
            titre: "Physionomie",
            tooltip: {
                label: "Reconnaître et lire les émotions d'autrui",
                niveaux: []
            }
        },
        {
            titre: "Séduction",
            tooltip: {
                label: "Faire naître l'affection et le désir",
                niveaux: []
            }
        },
        {
            titre: "Tromperie",
            tooltip: {
                label: "Mentir sans sourciller",
                niveaux: []
            }
        },
    ],
    mental: [
        {
            titre: "Enquête",
            tooltip: {
                label: "Tirer des informations à partir d'une scène",
                niveaux: []
            }
        },
        {
            titre: "Culture",
            tooltip: {
                label: "Sciences humaines et sociale (histoire, philosophie...)",
                niveaux: [
                    "Vous aimez bien regarder Arte",
                    "Vous passerez sans problème en fac de sciences humaines",
                    "Vous pouriez écrire des articles de vulgarisation",
                    "Vous avez de quoi être un conférencier reconnu",
                    "Vos écrits seront enseignés aux étudiants des générations futures"
                ]
            }
        },
        {
            titre: "Informatique",
            tooltip: {
                label: "Maîtriser les technologies numériques",
                niveaux: [
                    "Vous êtes à l'aise avec un ordinateur et un smartphone",
                    "Vous avez des bases de programmation",
                    "Vous avez de quoi vous faire embaucher en tant que développeur",
                    "Vous pouvez être un consultant expert en cybersécurité",
                    "Vous êtes le nouveau Linus Torvalds"
                ]
            }
        },
        {
            titre: "Mécanique",
            tooltip: {
                label: "Comprendre ou assembler des objets et mécanismes",
                niveaux: []
            }
        },
        {
            titre: "Médecine",
            tooltip: {
                label: "Comprendre et soigner le corps",
                niveaux: [
                    "Vous savez faire un massage cardiaque",
                    "Vous êtes à l'aise avec bandages et garrots",
                    "Vous êtes (ou pourriez être) médecin généraliste",
                    "Une opération chirurgicale, c'est dans vos cordes",
                    "Une transplantation cardiaque sur un comptoir de bar ? Tout de suite !"
                ]
            }
        },
        {
            titre: "Occulte",
            tooltip: {
                label: "Connaissance du Monde de la Nuit, à la frontière du mythe et du réel",
                niveaux: [
                    "Vous avez lu quelques threads Reddit plus ou moins fiables",
                    "Vous êtes membre actif de communautés en ligne sur le paranormal",
                    "Vous lisez d'obscures ouvrages sur l'ésotérisme",
                    "Vous avez une connaissance profonde de ce qui se cache entre les lignes du monde",
                    "Le Necronomicon est votre livre de chevet"
                ]
            }
        },
        {
            titre: "Sciences",
            tooltip: {
                label: "Mathématiques, physique, chimie",
                niveaux: [
                    "Vous avez de solides souvenirs des cours de lycée",
                    "Vous sortez d'une école d'ingénieur",
                    "Vous pourriez soutenir une thése de doctorat",
                    "Niveau d'un scientifique de renom",
                    "Le prochain prix Nobel est pour vous"
                ]
            }
        },
        {
            titre: "Société",
            tooltip: {
                label: "Connaître les institutions et individus importants de la société humaine",
                niveaux: []
            }
        },
        {
            titre: "Vigilance",
            tooltip: {
                label: "Détecter le monde qui vous entoure",
                niveaux: []
            }
        },
    ]
};

export default competences;