export const ressources: RessourceListe = {
    "Finances": {
        nom: "Finances",
        description: "Moyens financiers et revenus",
        niveaux: [
            "Revenu régulier d’environ 1.700€ mensuel (salaire médian en France)",
            "Environ 5.000€ mensuel (10% les plus riches)",
            "Environ 15.000€ mensuel (0,5% les plus riches)"
        ]
    },
    "Informations": {
        nom: "Informations",
        description: "Réseau d'informateurs",
        niveaux: [
            "Réseau informel tel qu’un groupe d’étudiants, ou un forum en ligne",
            "Le réseau comporte quelques personnes bien placées dans un domaine particulier (police, presse...)",
            "Véritable réseau d’espionnage implanté dans de nombreux lieux d’influence pouvant être mobilisé rapidement"
        ]
    },
    "Influence": {
        nom: "Influence",
        description: "Capacité à influencer discrètement les institutions humaines",
        niveaux: [
            "Vous connaissez quelqu'un qui connait quelqu'un...",
            "Vous avez de l'influence sur un député ou un juge d'instruction",
            "Vous avez le numéro de téléphone personnel d'un ministre"
        ]
    },
    "Séides": {
        nom: "Séides",
        description: "Hommes de main pouvant venir vous aider",
        niveaux: [
            "Quelques cousins ou potes de quartier, pas très dégourdis",
            "Un gang de rue ou un petit groupe de vétérans de l'armée",
            "Escouade d'une dizaine de mercenaires"
        ]
    },
    "Célébrité": {
        nom: "Célébrité",
        description: "A quel point vous êtes connu dans la société humaine",
        niveaux: [
            "Vous avez une réputation au sein d’une niche particulière (un sport, un style musical...)",
            "Vous commencez discrètement à percer au niveau national et avez déjà fait de la télé",
            "On vous reconnaît très fréquemment dans la rue et on se presse à vos dédicaces"
        ]
    }
}

export interface RessourceListe {
    [index:string]:Ressource
}

export interface Ressource {
    nom: string;
    description: string;
    niveaux: Array<string>;
}