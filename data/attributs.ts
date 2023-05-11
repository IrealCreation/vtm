export const attributs: AttributListe = {
    "Force": {
        nom: "Force",
        description: "Puissance musculaire brute",
            niveaux: [
                "Vous avez du mal à soulever un sac de courses",
                "Vous vous exercez de temps en temps",
                "Vous êtes sportif et pouvez porter de lourdes charges",
                "Vos muscles font envie aux catcheurs professionnels",
                "Vous êtes en compétition pour le titre de personne la plus forte au monde"
            ]
    },
    "Dextérité": {
        nom: "Dextérité",
        description: "Puissance musculaire brute",
            niveaux: [
                "On vous appelle miss/mister catastrophe à force de faire tomber des trucs",
                "A part des maladresses occasionnelles, vous êtes en contrôle de vos gestes",
                "Vous savez exécuter des mouvements fins et précis",
                "Vous avez de quoi devenir acrobate ou danseur·euse classique de talent",
                "Vous vous mouvez avec une grâce hypnotique"
            ]
    },
    "Vigueur": {
        nom: "Vigueur",
        description: "Puissance musculaire brute",
            niveaux: [
                "Le moindre effort physique vous laisse essouflé·e",
                "Votre santé est correcte et vous pouvez encaisser quelques coups",
                "Votre forme est complimentée par les médecins",
                "Vous avez un corps robuste et une endurance de marathonien",
                "Rien n'est capable de vous terrasser"
            ]
    },
    "Charisme": {
        nom: "Charisme",
        description: "Prestance, beauté, maîtrise de son image",
            niveaux: [
                "On grimace en vous voyant arriver",
                "Vous n'éveillez pas de première réaction particulière",
                "Vous vous faites facilement des amis",
                "Votre magnétisme attire les gens comme des coléoptères vers la lumière",
                "Il suffit de vous voir une fois pour se souvenir de vous à jamais"
            ]
    },
    "Psychologie": {
        nom: "Psychologie",
        description: "Compréhension et manipulation des interactions sociales",
            niveaux: [
                "On vous dit souvent grossier en société",
                "Il vous arrive de commettre des faux-pas, mais ils restent assez rares",
                "Vous êtes un fin observateur des dynamiques de groupe",
                "Vous obtenez presque toujours ce que vous voulez de vos interlocuteurs",
                "Vous convaincriez votre pire ennemi de vous offrir sa montre"
            ]
    },
    "Sang-froid": {
        nom: "Sang-froid",
        description: "Rester maître de ses émotions",
            niveaux: [
                "Vous vous emportez pour un rien",
                "Vous pouvez vous laisser submerger par de fortes émotions",
                "Rares sont les fois où on vous a vu perdre votre calme",
                "Votre poker face est absolument redoutable",
                "Vous faites preuve d'un détachement digne du Dalaï Lama",
            ]
    },
    "Intelligence": {
        nom: "Intelligence",
        description: "Savoir et capacité de raisonnement",
            niveaux: [
                "Vous n'avez pas eu - et n'auriez toujours pas - votre bac",
                "Vous êtes assez intelligent pour savoir que vous ne savez pas tout",
                "Vous n'hésitez pas à lire des articles spécialisés sur des sujets complexes",
                "Vous n'auriez pas de mal à tenir une conversation avec Kant ou Socrate",
                "Si une personne mérite le titre de génie, c'est bien vous",
            ]
    },
    "Acuité": {
        nom: "Acuité",
        description: "Perception, temps de réaction et astuce",
            niveaux: [
                "Quand il se passe quelque chose, vous êtes le dernier à réagir",
                "Vous avez des réflexes convenables dans la vie de tous les jours",
                "Face à une situation de danger, vous savez rapidement vous adapter",
                "Vous êtes conscients de votre environnement même les yeux fermés",
                "Votre sixième sens s'approche du surnaturel",
            ]
    },
    "Concentration": {
        nom: "Concentration",
        description: "Persévérance et détermination",
            niveaux: [
                "Vous êtes aisément distrait et vous découragez à la moindre embuche",
                "Vous tenez pendant une journée de travail - mais les vendredi soir sont compliqués",
                "Quand vous vous absorbez dans une tâche, il est difficile de vous en détourner",
                "Même dans la douleur et la détresse, vous restez concentré sur votre objectif",
                "Votre esprit est une forteresse mentale impénétrable",
            ]
    }
};

export const attributsPhysique: AttributListe = {
    "Force": attributs["Force"],
    "Dextérité": attributs["Dextérité"],
    "Vigueur": attributs["Vigueur"]
}

export const attributsSocial: AttributListe = {
    "Charisme": attributs["Charisme"],
    "Psychologie": attributs["Psychologie"],
    "Sang-froid": attributs["Sang-froid"]
}

export const attributsMental: AttributListe = {
    "Intelligence": attributs["Intelligence"],
    "Acuité": attributs["Acuité"],
    "Concentration": attributs["Concentration"]
}

export interface AttributListe {
    [index:string]: Attribut
}

export interface Attribut {
    nom: string;
    description: string;
    niveaux: Array<string>;
}