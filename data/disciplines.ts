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
                cout: "+1 PS"
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
                cout: "+1 PS"
            }
        ]
    },
    "Augure": {
        nom: "Augure",
        description: "La discipline d’Augure offre à son lanceur des dons d’acuité surnaturels, en augmentant son sens ou en percevant l’aura des gens. Elle s’associe bien à l’Acuité et nécessite souvent un contact visuel.",
        niveaux: [
            {
                nom: "Sens supérieur",
                description: "Accroît de façon surnaturelle l’un des sens du lanceur (+1 aux jets d'Acuité)",
                duree: "15 minutes",
                cout: 1
            },
            {
                nom: "Perception des auras",
                description: "Le lanceur peut percevoir l’aura des personnes dans son champ de vision, permettant d’obtenir des informations à son sujet (santé, volonté, état d’esprit…). Les auras peuvent aider à révéler une personne camouflée ou occultée, et à détecter l’usage de Disciplines",
                duree: "1 heure",
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
                description: "Le lanceur peut se projeter dans la psyché d’une autre personne spécifique, lui permettant de lire ses pensées ou ses souvenirs. La victime peut résister avec sa Détermination.",
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
        description: "Domination permet au lanceur d’influencer, de commander et de contrôler les personnes de son choix. Il doit pour cela créer un contact visuel et parler un langage audible et compréhensible par sa cible. La Psychologie ou le Charisme permettent de l’utiliser, et la Détermination d’y résister.",
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
                description: "Permet d’utiliser une discipline de Domination sur toutes les personnes à portée de vue et de voix à une dizaine de mètres à la ronde.",
                cout: "+1 PS"
            }
        ]
    },
    "Fortitude": {
        nom: "Fortitude",
        description: "Fortitude permet à l’adepte de cette discipline d’accroître sa résistance physique comme mentale, ainsi que de se remettre plus rapidement de ses blessures.",
        niveaux: [
            {
                nom: "Guérir la chair",
                description: "Le lanceur se soigne instantanément d’une blessure.",
                cout: 1
            },
            {
                nom: "Volonté de fer",
                description: "Le lanceur peut ajouter son niveau de Fortitude lorsqu’il résiste à une discipline visant à altérer son esprit (Domination, Aliénation...).",
                cout: 1
            },
            {
                nom: "Fortifier autrui",
                description: "Permet de lancer une discipline de Fortitude sur une goule appartenant au lanceur ou sur un autre caïnite avec lequel il a un contact physique.",
                cout: "+1 PS"
            },
            {
                nom: "Ignorer la douleur",
                description: "Le lanceur peut ignorer la moitié (arrondie au supérieur) des dégâts d’une action le prenant pour cible. Ne peut être lancé à nouveau avant son prochain tour.",
                cout: 2
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
                cout: "+1 PS"
            }
        ]
    },
    "Présence": {
        nom: "Présence",
        description: "Présence est la discipline de l’apparence et de l’ostentation. Elle offre à celui qui la maîtrise la possibilité d’attirer et de charmer son entourage. Elle s’associe naturellement au Charisme.",
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
    "Puissance": {
        nom: "Puissance",
        description: "Puissance est une discipline principalement offensive et instantanée : son utilisation permet d’accroître temporairement la Force physique du lanceur.",
        niveaux: [
            {
                nom: "Coup puissant",
                description: "Au moment d’accomplir une action impliquant la Force, le lanceur peut activer cette discipline afin d’y ajouter son score de Puissance.",
                cout: 1
            },
            {
                nom: "Gorgée brutale",
                description: "En l’espace d’une seule gorgée, le lanceur boit une importante quantité de sang de la victime (ce qui lui prendrait normalement plusieurs minutes).",
                cout: 1
            },
            {
                nom: "Poing de Caïn",
                description: "Lance l’équivalent d’une attaque physique de contact à une distance pouvant aller jusqu’à 20 mètres si aucun obstacle sérieux ne le sépare de la cible.",
                cout: 2
            },
            {
                nom: "Colère irradiante",
                description: "Le contact du lanceur devient intensément douloureux pour toute personne le touchant, ce qui accroît notamment ses dégâts à mains nues.",
                duree: "15 minutes",
                cout: 2
            },
            {
                nom: "Onde de choc",
                description: "Par la puissance de son corps ou de sa voix, le lanceur provoque une onde de choc repoussant les ennemis dans un rayon de 10 mètres et leur infligeant l’équivalent d’une attaque physique pouvant les étourdir.",
                cout: 3
            }
        ]
    },
    "Métamorphose": {
        nom: "Métamorphose",
        description: "Métamorphose offre à celui qui la maîtrise de modifier son propre propre corps pour mimer l’essence et la forme des autres créatures vivantes. C’est la discipline signature des Gangrel",
        niveaux: [
            {
                nom: "Griffes de la bête",
                description: "Les mains du lanceur se transforment en griffes : il inflige 1 dégât supplémentaire à mains nues, mais ne peut plus accomplir d’actions impliquant ses doigts.",
                duree: "15 minutes",
                cout: 1
            },
            {
                nom: "Membres de la bête",
                description: "Le lanceur peut transformer ses membres afin de modifier son déplacement : il peut courir plus vite avec des pattes de guépard, nager avec des pieds palmés, ou planer légèrement avec des bras ailés.",
                duree: "15 minutes",
                cout: 2
            },
            {
                nom: "Clignement bestial",
                description: "Le lanceur se transforme très brièvement en une créature animale le temps d'une action.",
                cout: 2
            },
            {
                nom: "Forme bestiale",
                description: "Le lanceur se transforme en une créature animale.",
                duree: "1 heure",
                cout: 3
            },
            {
                nom: "Identité bestiale",
                description: "Le lanceur se transforme en une créature animale et peut conserver cette forme aussi longtemps qu'il souhaite.",
                duree: "Infinie",
                cout: 4
            }
        ]
    },
    "Thaumaturgie": {
        nom: "Thaumaturgie",
        description: "La Thaumaturgie est une discipline jalousement gardée par les Tremere, qui consiste en l’application de la force de l’esprit sur le monde physique, ce que les humains appellent le plus communément « magie ». Dans la branche qui nous intéresse, elle s’applique plus particulièrement à la magie liée au sang. Elle fait appel à l’Intelligence de son lanceur et nécessite un contact visuel voire physique.",
        niveaux: [
            {
                nom: "Siphon",
                description: "Aspire le sang de l’ennemi sur une distance allant jusqu’à 10 mètres.",
                cout: 1
            },
            {
                nom: "Goût du sang",
                description: "En goûtant du sang, le lanceur peut identifier son propriétaire et en apprendre plus sur lui.",
                cout: 1
            },
            {
                nom: "Exhémie",
                description: "Affaiblit le sang d’une victime au travers d’un contact physique, lui infligeant - 1 à tous ses attributs.",
                duree: "1 heure",
                cout: 2
            },
            {
                nom: "Sang impur",
                description: "Utilisée sur un vampire, empêche celui-ci de lancer toute discipline (s’il ne le remarque pas, sa prochaine discipline sera un échec critique). Utilisée sur un humain, lui inflige une maladie de sang qui se transmettra aux vampires le mordant, ayant alors les effets sus-cités.",
                duree: "3 heures (vampire) / 7 jours (humain)",
                cout: 3
            },
            {
                nom: "Torrent de sang",
                description: "Applique un Siphon à toutes les personnes visées dans un rayon de 10 mètres.",
                cout: 3
            }
        ]
    },
    "Nécromancie": {
        nom: "Nécromancie",
        description: "La Nécromancie, discipline dont les secrets sont gardés par les Giovanni, permet le contact avec le monde des morts, ainsi que le contrôle des corps défunts qui peuvent être soumis à la volonté du lanceur. Cela nécessite un contact physique avec l’objet de la discipline.",
        niveaux: [
            {
                nom: "Désécration",
                description: "Le lanceur absorbe les relents d’énergie vitale d’un humain décédé il y a moins de 24 heures et soigne une blessure.",
                cout: 1
            },
            {
                nom: "Mort marchant",
                description: "Le lanceur fait se lever un cadavre et lui ordonne par la pensée d’exécuter des tâches simples.",
                duree: "1 heure",
                cout: 2
            },
            {
                nom: "Serviteur morbide",
                description: "Le lanceur fait se lever un cadavre et lui ordonne par la pensée d’exécuter des tâches physiquement exigeantes, comme déplacer des poids ou attaquer quelqu’un.",
                duree: "3 heures",
                cout: 3
            },
            {
                nom: "Vol de corps",
                description: "Le lanceur injecte sa volonté dans un corps inanimé qu’il peut alors pleinement contrôler. Le lanceur conserve ses attributs mentaux mais récupère ceux physiques de la cible. Il ne peut utiliser ses disciplines.",
                duree: "1 nuit",
                cout: 3
            },
            {
                nom: "Levée des morts",
                description: "Permet d’utiliser Mort marchant et Serviteur morbide sur plusieurs cadavres dans un rayon de 10 mètres.",
                cout: "Jusqu’à 3 cadavres : +1 PS. Jusqu’à 10 cadavres : +2 PS."
            }
        ]
    },
    "Obténébration": {
        nom: "Obténébration",
        description: "Discipline signature des Lasombras, Obténébration offre à son disciple la maîtrise des ombres et même le pouvoir de les utiliser comme arme et comme protection. La Détermination du lanceur jauge son efficacité, et il doit avoir sa cible d’action dans son champ visuel.",
        niveaux: [
            {
                nom: "Jeu d’ombres",
                description: "Permet au lanceur de déplacer et modifier la forme d’une ombre non loin.",
                duree: "15 minutes",
                cout: 1
            },
            {
                nom: "Drap de ténèbres",
                description: "Crée une sphère d'environ 10 mètres de diamètre de ténèbres absolues où tous sont privés de la vue et où les sons sont distordus, sauf le lanceur.",
                duree: "15 minutes",
                cout: 2
            },
            {
                nom: "Bras de l’abysse",
                description: "Fait apparaître un tentacule d’ombre dont le lanceur peut se servir afin de saisir, se protéger ou combattre.",
                duree: "15 minutes",
                cout: 2
            },
            {
                nom: "Invocation ténébreuse",
                description: "Transforme l’ombre du lanceur en un familier de ténèbres qui lui obéit, est capable d’accomplir des actions simples et de combattre.",
                duree: "1 heure",
                cout: 3
            },
            {
                nom: "Forme démoniaque",
                description: "Transforme le lanceur en une massive créature de ténèbres ayant une résistance accrue aux blessures physiques.",
                duree: "1 heure",
                cout: 3
            }
        ]
    },
    "Vicissitude": {
        nom: "Vicissitude",
        description: "Discipline maîtrisée par les Tzimisces, Vicissitude permet à celui qui s’adonne à cet art de modeler et modifier son propre corps comme celui des personnes qu’il touche, lui permettant de créer le beau comme l’immonde et le monstrueux. Elle nécessite de l’Intelligence et de la Vigueur.",
        niveaux: [
            {
                nom: "Traits malléable",
                description: "le lanceur peut modeler un de ses propres aspects physiques mineurs.",
                duree: "15 minutes",
                cout: 1
            },
            {
                nom: "Modelage de la chair",
                description: "Le lanceur peut modeler, sur lui-même ou sur une cible, le muscle, la graisse et le cartilage.",
                duree: "1 heure",
                cout: 2
            },
            {
                nom: "Modelage de l’os",
                description: "Les talents de modelage du lanceur se perfectionnent et s’étendent aux os.",
                duree: "1 heure",
                cout: 2
            },
            {
                nom: "Modelage rallongé",
                description: "Les modifications corporelles apportées par le lanceur peuvent durer jusqu’à 24 heures.",
                duree: "24 heures",
                cout: "+1 PS"
            },
            {
                nom: "Modelage définitif",
                description: "Les modifications corporelles apportées par le lanceur peuvent devenir permanentes sur les humains, et les vampires consentants.",
                duree: "Infini",
                cout: "+2 PS"
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

