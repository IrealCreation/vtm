export const disciplines: DisciplineListe = {
    "Aliénation": {
        nom: "Aliénation",
        description: "L’Aliénation, discipline signature des Malkaviens, permet au lanceur de provoquer le trouble et la folie chez ceux qui l’entourent en projetant ses propres dérangements d’esprit. Elle nécessite un contact visuel. Le lanceur utilise pour cela sa Psychologie et s'oppose au Sang-froid de la victime.",
        niveaux: [
            {
                nom: "Passion",
                description: "Le lanceur amplifie une émotion de son choix chez la victime.",
                duree: "15 minutes",
                cout: 1
            },
            {
                nom: "Murmures dissonants",
                description: "La victime entend des voix inquiétantes qui peuvent la pousser à la paranoïa ou à la frayeur.",
                duree: "15 minutes",
                cout: 2
            },
            {
                nom: "Fêlure psychique",
                description: "L’esprit de la victime se retourne contre lui-même, lui infligeant des dégâts de Volonté.",
                cout: 2
            },
            {
                nom: "Folie",
                description: "Le lanceur fait naître un dérangement mental de son choix chez la victime.",
                duree: "1 nuit",
                cout: 3
            },
            {
                nom: "Hystérie de masse",
                description: "Permet d'étendre l'effet d'une discipline d'Aliénation à toutes les personnes au choix du lanceur dans un rayon de 10 mètres autour de lui.",
                cout: "+1 PS au coût de la discipline"
            }
        ]
    },
    "Animalisme": {
        nom: "Animalisme",
        description: "Animalisme est une discipline qui permet à son adepte le dialogue avec les animaux et le contrôle sur ceux-ci. Elle se base sur la Psychologie ou le Sang-Froid.",
        niveaux: [
            {
                nom: "Parole animale",
                description: "Permet au lanceur de communiquer, par la voix et le regard, avec un animal.",
                duree: "15 minutes",
                cout: 1
            },
            {
                nom: "Appel",
                description: "Convoque un animal particulier (ou un type d'animal) jusqu'au lanceur.",
                cout: 1
            },
            {
                nom: "Oeil de l'alpha",
                description: "D’un regard, le lanceur affirme sa position de dominance sur un animal, qui va se prostrer ou prendre la fuite.",
                duree: "1 heure",
                cout: 2
            },
            {
                nom: "Subsumer l’esprit",
                description: "Le lanceur établit un lien télépathique et prend le contrôle temporaire du corps d’un animal. Pendant toute la durée d’effet, il peut au choix contrôler son propre corps ou celui de la cible.",
                duree: "3 heures",
                cout: 3
            },
            {
                nom: "Diriger la meute",
                description: "Permet d’utiliser une discipline d’Animalisme sur tous les animaux à portée de voix dans un rayon de 10 mètres autour de lui.",
                cout: "+1 PS au coût de la discipline"
            }
        ]
    },
    "Augure": {
        nom: "Augure",
        description: "La discipline d’Augure offre à son lanceur des dons d’acuité surnaturels, en augmentant son sens ou en percevant l’aura des gens. Elle s’associe bien à l’Acuité et nécessite souvent un contact visuel.",
        niveaux: [
            {
                nom: "Sens supérieur",
                description: "Accroît de façon surnaturelle l’un des sens du lanceur (+1 aux jets correspondants)",
                duree: "15 minutes",
                cout: 1
            },
            {
                nom: "Perception des auras",
                description: " le lanceur peut percevoir l’aura des personnes dans son champ de vision, permettant d’obtenir des informations à son sujet (santé, volonté, état d’esprit…). Les auras peuvent aider à révéler une personne camouflée ou occultée, et à détecter l’usage de Disciplines",
                duree: "",
                cout: 2
            },
            {
                nom: "Télépathie",
                description: "Avec un contact visuel, établit une connexion mentale avec un autre individu permettant de communiquer par la pensée. Le lien télépathique peut être ensuite maintenu même sans contact visuel.",
                duree: "1 heure",
                cout: 2
            },
            {
                nom: "Fouille mentale",
                description: "Le lanceur peut se projeter dans la psyché d’une autre personne spécifique, lui permettant de lire ses pensées ou ses souvenirs. La victime peut résister avec sa Concentration.",
                cout: 3
            },
            {
                nom: "Voyage extracorporel",
                description: "Le lanceur libère son esprit de sa chair et peut ainsi voyager via une forme invisible et immatérielle, détectable uniquement via la perception des auras. Seuls les autres pouvoirs d’Augure sont utilisables sous cette forme.",
                duree: "1 nuit",
                cout: 4
            }
        ]
    },
    "Célérité": {
        nom: "Célérité",
        description: "La Célérité offre à celui qui la maîtrise une vitesse et des réflexes proprement surnaturels : il peut ainsi réaliser plus d’actions plus rapidement.",
        niveaux: [
            {
                nom: "Sprint des ombres",
                description: "le lanceur se déplace en une fraction de seconde sur une distance assez longue (égale à 10 mètres * Célérité), lui permettant d’agir dans la foulée en combat.",
                cout: 1
            },
            {
                nom: "Actions multiples",
                description: "Le lanceur agit avec une vitesse accrue, et peut ainsi accomplir deux actions là où il ne pourrait en faire qu'une.",
                cout: 2
            },
            {
                nom: "Bullet time",
                description: "Le lanceur esquive instantanément un coup, un tir ou un projectile qui le prenait pour cible. Ce pouvoir ne peut être réutilisé avant le tour suivant du lanceur.",
                cout: 2
            },
            {
                nom: "Entre-temps",
                description: "Ce pouvoir peut être utilisé n'importe quand pour permettre au lanceur d'effectuer immédiatement son prochain tour d'action. Ce pouvoir ne peut être réutilisé avant le tour suivant du lanceur.",
                cout: 2
            },
            {
                nom: "Actions abondantes",
                description: "Le lanceur peut agir avec une vitesse encore supérieure et accomplir le triple d’actions dans un temps donné.",
                cout: 3
            }
        ]
    },
    "Domination": {
        nom: "Domination",
        description: "Domination permet au lanceur d’influencer, de commander et de contrôler les personnes de son choix. Il doit pour cela créer un contact visuel et parler un langage audible et compréhensible par sa cible. La Psychologie ou le Charisme permettent de l’utiliser, et la Concentration d’y résister.",
        niveaux: [
            {
                nom: "Mot de commande",
                description: "Le lanceur donne à haute voix un ordre simple et immédiat d'un seul mot à sa victime.",
                cout: 1
            },
            {
                nom: "Esprit oublieux",
                description: "La victime oublie ses récents souvenirs, de quelques minutes à plusieurs heures.",
                cout: "1 PS (quelques minutes) / 2 PS (plusieurs heures)"
            },
            {
                nom: "Suggestion",
                description: "Le lanceur donne un ordre complexe à sa victime sous forme d’une ou plusieurs phrases. Cet ordre ne peut fonctionner que cette nuit, et ne doit pas aller à l’encontre de la sécurité ou des valeurs fondamentales de la victime.",
                duree: "1 nuit",
                cout: 2
            },
            {
                nom: "Loyauté",
                description: "Par contact visuel et oral, instaure chez la cible un sentiment de loyauté indéfectible envers le lanceur, au détriment de sa propre sécurité ou de ses propres valeurs.",
                duree: "1 heure",
                cout: 3
            },
            {
                nom: "Contrôle des foules",
                description: "permet d’utiliser une discipline de Domination sur toutes les personnes à portée de vue et de voix à une dizaine de mètres à la ronde.",
                cout: "+1 PS au coût de la discipline"
            }
        ]
    },
    "Fortitude": {
        nom: "Fortitude",
        description: "Fortitude, aussi parfois nommée “force d’âme”, permet à l’adepte de cette discipline d’accroître sa résistance physique comme mentale, ainsi que de se remettre plus rapidement de ses blessures.",
        niveaux: [
            {
                nom: "Guérir la chair",
                description: "Le lanceur se soigne instantanément d’une blessure.",
                cout: 1
            },
            {
                nom: "Volonté de fer",
                description: "Le lanceur peut ajouter son niveau de Fortitude lorsqu’il résiste à une discipline visant à altérer son esprit (Domination, Aliénation...).",
                cout: 2
            },
            {
                nom: "Ignorer la douleur",
                description: "Le lanceur peut ignorer la moitié (arrondie au supérieur) des dégâts d’une action le prenant pour cible. Ne peut être lancé à nouveau avant son prochain tour.",
                cout: 2
            },
            {
                nom: "Fortifier autrui",
                description: "Permet de lancer une discipline de Fortitude sur une goule appartenant au lanceur ou sur un autre caïnite avec lequel il a un contact physique.",
                cout: "+1 PS au coût de la discipline"
            },
            {
                nom: "Invulnérabilité",
                description: "Pendant un bref moment, le lanceur devient purement et simplement invulnérable aux dégâts et aux disciplines pouvant le prendre pour cible.",
                duree: "5 minutes",
                cout: 4
            }
        ]
    },
    "Occultation": {
        nom: "Occultation",
        description: "Occultation est la discipline de la discrétion et de l’infiltration. Elle est utile à celui qui cherche à se déplacer sans être vu ou reconnu.",
        niveaux: [
            {
                nom: "Manteau d’ombre",
                description: "Permet au lanceur de rester parfaitement caché tant qu’il demeure dans les ombres et n’effectue pas d’action visible.",
                duree: "15 minutes",
                cout: 1
            },
            {
                nom: "Déplacement camouflé",
                description: "Permet au lanceur de se déplacer sans être vu, même dans la lumière, mais sans interagir avec des objets.",
                duree: "15 minutes",
                cout: 2
            },
            {
                nom: "Masque de mille visages",
                description: "Permet au lanceur de prendre l’apparence extérieure de quelqu’un d’autre.",
                duree: "1 heure",
                cout: 2
            },
            {
                nom: "Invisibilité",
                description: "Le lanceur devient totalement invisible et peut accomplir des actions complexes tout en le restant.",
                duree: "15 minutes",
                cout: 3
            },
            {
                nom: "Occultation de groupe",
                description: "Le lanceur peut étendre chacun de ses effets d’occultation à un groupe allant jusqu’à 5 personnes tant que celles-là restent dans un rayon de 5 mètres.",
                cout: "+1 PS au coût de la discipline"
            }
        ]
    },
    "Présence": {
        nom: "Présence",
        description: "Présence est la discipline de l’apparence et de l’ostentation. Elle offre à celui qui la maîtrise la possibilité d’attirer et de séduire son entourage. Elle s’associe naturellement au Charisme.",
        niveaux: [
            {
                nom: "Superbe",
                description: "Confère au lanceur une discrète aura impressionnant ceux le voyant (+1 aux jets de Charisme).",
                duree: "15 minutes",
                cout: 1
            },
            {
                nom: "Regard d’adoration",
                description: "Par son regard, le lanceur emplit de vide adoration une victime, laquelle risque de devenir ensorcelée et d’avoir ses autres pensées éclipsées - ou au moins perturbées temporairement.",
                duree: "15 minutes",
                cout: 2
            },
            {
                nom: "Porte-étendard",
                description: "le lanceur interpelle un autre personnage. Si la cible est alliée, celle-ci se voit remplie d'ardeur (+1 à ses jets). Si la cible est neutre, un élan de sympathie l’encourage à venir défendre le lanceur.",
                duree: "15 minutes",
                cout: 2
            },
            {
                nom: "Charme",
                description: "Le lanceur fait naître chez quelqu’un l’obsession de lui plaire.",
                duree: "1 nuit",
                cout: 3
            },
            {
                nom: "Adoration des masses",
                description: "La simple vision du lanceur provoque les effets de Regard d'adoration sur chaque spectateur. L'effet se maintient tant que le lanceur est visible, puis se dissipe en quelques minutes.",
                duree: "15 minutes",
                cout: 4
            }
        ]
    },
    "": {
        nom: "",
        description: "",
        niveaux: [
            {
                nom: "",
                description: "",
                duree: "",
                cout: 1
            },
            {
                nom: "",
                description: "",
                duree: "",
                cout: 2
            },
            {
                nom: "",
                description: "",
                duree: "",
                cout: 2
            },
            {
                nom: "",
                description: "",
                duree: "",
                cout: 3
            },
            {
                nom: "",
                description: "",
                duree: "",
                cout: 3
            }
        ]
    }
};

export interface DisciplineListe {
    [index:string]:Discipline
}

export interface Discipline {
    nom: string;
    description: string;
    niveaux: Array<DisciplineNiveau>;
}

export interface DisciplineNiveau {
    nom: string;
    description: string;
    duree?: string;
    cout?: number|string;
}

