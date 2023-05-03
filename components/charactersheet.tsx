import TextField from "./fields/textfield"
import NumberField from "./fields/numberfield"
import TextAreaField from "./fields/textareafield"
import RadioField from "./fields/radiofield"
import { Tooltip } from 'react-tooltip'
import { ObjectType } from "typescript"

export default function CharacterSheet() {
    const tooltips = {
        experience: "Gain de niveau tous les 10 points d'expérience"
    };

    const attributs = {
        physique: [
            {
                titre: "Force",
                tooltip: {
                    label: "Puissance musculaire brute",
                    radios: [
                        "Vous avez du mal à soulever un sac de courses",
                        "Vous vous exercez de temps en temps",
                        "Vous êtes sportif et pouvez porter de lourdes charges",
                        "Vos muscles font envie aux catcheurs professionnels",
                        "Vous êtes en compétition pour le titre de personne la plus forte au monde"
                    ]
                },
            },
            {
                titre: "Dextérité",
                tooltip: {
                    label: "Puissance musculaire brute",
                    radios: [
                        "On vous appelle miss/mister catastrophe à force de faire tomber des trucs",
                        "A part des maladresses occasionnelles, vous êtes en contrôle de vos gestes",
                        "Vous savez exécuter des mouvements fins et précis",
                        "Vous avez de quoi devenir acrobate ou danseur·euse classique de talent",
                        "Vous vous mouvez avec une grâce hypnotique"
                    ]
                },
            },
            {
                titre: "Vigueur",
                tooltip: {
                    label: "Puissance musculaire brute",
                    radios: [
                        "Le moindre effort physique vous laisse essouflé·e",
                        "Votre santé est correcte et vous pouvez encaisser quelques coups",
                        "Votre forme est complimentée par les médecins",
                        "Vous avez un corps robuste et une endurance de marathonien",
                        "Rien n'est capable de vous terrasser"
                    ]
                },
            }
        ],
        social: [
            {
                titre: "Charisme",
                tooltip: {
                    label: "Prestance, beauté, maîtrise de son image",
                    radios: [
                        "On grimace en vous voyant arriver",
                        "Vous n'éveillez pas de première réaction particulière",
                        "Vous vous faites facilement des amis",
                        "Votre magnétisme attire les gens comme des coléoptères vers la lumière",
                        "Il suffit de vous voir une fois pour se souvenir de vous à jamais"
                    ]
                },
            },
            {
                titre: "Psychologie",
                tooltip: {
                    label: "Compréhension et manipulation des interactions sociales",
                    radios: [
                        "On vous dit souvent grossier en société",
                        "Il vous arrive de commettre des faux-pas, mais ils restent assez rares",
                        "Vous êtes un fin observateur des dynamiques de groupe",
                        "Vous obtenez presque toujours ce que vous voulez de vos interlocuteurs",
                        "Vous convaincriez votre pire ennemi de vous offrir sa montre"
                    ]
                },
            },
            {
                titre: "Sang-froid",
                tooltip: {
                    label: "Rester maître de ses émotions",
                    radios: [
                        "Vous vous emportez pour un rien",
                        "Vous pouvez vous laisser submerger par de fortes émotions",
                        "Rares sont les fois où on vous a vu perdre votre calme",
                        "Votre poker face est absolument redoutable",
                        "Vous faites preuve d'un détachement digne du Dalaï Lama",
                    ]
                },
            }
        ],
        mental: [
            {
                titre: "Intelligence",
                tooltip: {
                    label: "Savoir et capacité de raisonnement",
                    radios: [
                        "Vous n'avez pas eu - et n'auriez toujours pas - votre bac",
                        "Vous êtes assez intelligent pour savoir que vous ne savez pas tout",
                        "Vous n'hésitez pas à lire des articles spécialisés sur des sujets complexes",
                        "Vous n'auriez pas de mal à tenir une conversation avec Kant ou Socrate",
                        "Si une personne mérite le titre de génie, c'est bien vous",
                    ]
                },
            },
            {
                titre: "Acuité",
                tooltip: {
                    label: "Perception, temps de réaction et astuce",
                    radios: [
                        "Quand il se passe quelque chose, vous êtes le dernier à réagir",
                        "Vous avez des réflexes convenables dans la vie de tous les jours",
                        "Face à une situation de danger, vous savez rapidement vous adapter",
                        "Vous êtes conscients de votre environnement même les yeux fermés",
                        "Votre sixième sens s'approche du surnaturel",
                    ]
                },
            },
            {
                titre: "Concentration",
                tooltip: {
                    label: "Persévérance et détermination",
                    radios: [
                        "Vous êtes aisément distrait et vous découragez à la moindre embuche",
                        "Vous tenez pendant une journée de travail - mais les vendredi soir sont compliqués",
                        "Quand vous vous absorbez dans une tâche, il est difficile de vous en détourner",
                        "Même dans la douleur et la détresse, vous restez concentré sur votre objectif",
                        "Votre esprit est une forteresse mentale impénétrable",
                    ]
                },
            }
        ]
    };

    const competences = {
        physique: [
            { titre: "Acrobatie", 
                tooltip: {
                    label: "Sauts et équilibre",
                    radios: []
                }
            },
            { titre: "Athlétisme", 
                tooltip: {
                    label: "Course, escalade, natation...",
                    radios: [
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
                    radios: [
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
                    radios: []
                }
            },
            { titre: "Larcin", 
                tooltip: {
                    label: "Crochetage et vol à la tir",
                    radios: []
                }
            },
            { titre: "Mains nues", 
                tooltip: {
                    label: "Se battre avec vos poings et vos crocs",
                    radios: []
                }
            },
            { titre: "Mêlée", 
                tooltip: {
                    label: "Se battre avec une arme de corps à corps",
                    radios: []
                }
            },
            { titre: "Nature", 
                tooltip: {
                    label: "Vivre et s'adapter dans la nature sauvage",
                    radios: []
                }
            },
            { titre: "Tir", 
                tooltip: {
                    label: "Se battre avec une arme à distance",
                    radios: []
                }
            },
        ],
        social: [
            {
                titre: "Bagou",
                tooltip: {
                    label: "Interagir avec la basse société",
                    radios: []
                }
            },
            {
                titre: "Dressage",
                tooltip: {
                    label: "Interagir avec les animaux",
                    radios: []
                }
            },
            {
                titre: "Etiquette",
                tooltip: {
                    label: "Interagir avec la haute société",
                    radios: []
                }
            },
            {
                titre: "Intimidation",
                tooltip: {
                    label: "Contraindre par le chantage ou la menace",
                    radios: []
                }
            },
            {
                titre: "Négociation",
                tooltip: {
                    label: "Obtenir plus en donnant moins",
                    radios: []
                }
            },
            {
                titre: "Performance",
                tooltip: {
                    label: "Pratiques artistiques",
                    radios: []
                }
            },
            {
                titre: "Physionomie",
                tooltip: {
                    label: "Reconnaître et lire les émotions d'autrui",
                    radios: []
                }
            },
            {
                titre: "Séduction",
                tooltip: {
                    label: "Faire naître l'affection et le désir",
                    radios: []
                }
            },
            {
                titre: "Tromperie",
                tooltip: {
                    label: "Mentir sans sourciller",
                    radios: []
                }
            },
        ],
        mental: [
            {
                titre: "Enquête",
                tooltip: {
                    label: "Tirer des informations à partir d'une scène",
                    radios: []
                }
            },
            {
                titre: "Humanités",
                tooltip: {
                    label: "Sciences humaines et sociale (histoire, philosophie...)",
                    radios: [
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
                    radios: [
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
                    radios: []
                }
            },
            {
                titre: "Médecine",
                tooltip: {
                    label: "Comprendre et soigner le corps",
                    radios: [
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
                    radios: [
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
                    radios: [
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
                    radios: []
                }
            },
            {
                titre: "Vigilance",
                tooltip: {
                    label: "Détecter le monde qui vous entoure",
                    radios: []
                }
            },
        ]
    };

    /* Preparing the JSX for Attributs */
    const jsxAttrPhysique: Array<JSX.Element> = [];
    const jsxAttrSocial: Array<JSX.Element> = [];
    const jsxAttrMental: Array<JSX.Element> = [];

    for (let index = 0; index < 3; index++) {
        let physique = attributs.physique[index];
        let social = attributs.social[index];
        let mental = attributs.mental[index];

        jsxAttrPhysique.push(
            <div className="radio-group">
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={physique.tooltip.label}>{physique.titre}</span>
                <RadioField max={5} tooltip={physique.tooltip.radios} />
            </div>
        );

        jsxAttrSocial.push(
            <div className="radio-group">
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={social.tooltip.label}>{social.titre}</span>
                <RadioField max={5} tooltip={social.tooltip.radios} />
            </div>
        );

        jsxAttrMental.push(
            <div className="radio-group">
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={mental.tooltip.label}>{mental.titre}</span>
                <RadioField max={5} tooltip={mental.tooltip.radios} />
            </div>
        );
    }

    /* Preparing the JSX for Compétences */
    const jsxCompPhysique: Array<JSX.Element> = [];
    const jsxCompSocial: Array<JSX.Element> = [];
    const jsxCompMental: Array<JSX.Element> = [];

    for (let index = 0; index < competences.physique.length; index++) {
        let physique = competences.physique[index];
        let social = competences.social[index];
        let mental = competences.mental[index];

        jsxCompPhysique.push(
            <div className="radio-group">
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={physique.tooltip.label}>{physique.titre}</span>
                <RadioField min={0} max={5} tooltip={physique.tooltip.radios} />
            </div>
        );

        jsxCompSocial.push(
            <div className="radio-group">
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={social.tooltip.label}>{social.titre}</span>
                <RadioField min={0} max={5} tooltip={social.tooltip.radios} />
            </div>
        );

        jsxCompMental.push(
            <div className="radio-group">
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={mental.tooltip.label}>{mental.titre}</span>
                <RadioField min={0} max={5} tooltip={mental.tooltip.radios} />
            </div>
        );
    }

    return (
        <section className="character-sheet main-container">
            <div className="title-bloc">
                <div className="title-line"></div>
                <h1>Fiche de personnage</h1>
                <div className="title-line"></div>
            </div>
            
            <TextField label="Nom" />
            <TextField label="Lignée" />
            <NumberField label="Niveau" min={0} max={999} />
            <NumberField label="Expérience" min={0} max={10} tooltip={tooltips.experience} />
            <div className="flex">
                <TextAreaField label="Apparence" />
                <TextAreaField label="Caractère" />
            </div>

            <h2>Attributs</h2>
            <div className="columns attributs">
                <div>
                    <h3>Physique</h3>
                    {jsxAttrPhysique}
                </div>
                <div>
                    <h3>Social</h3>
                    {jsxAttrSocial}
                </div>
                <div>
                    <h3>Mental</h3>
                    {jsxAttrMental}
                </div>
            </div>
            
            <h2>Compétences</h2>
            <div className="columns competences">
                <div>
                    {jsxCompPhysique}
                </div>
                <div>
                    {jsxCompSocial}
                </div>
                <div>
                    {jsxCompMental}
                </div>
            </div>

            <h2>Disciplines</h2>
            
            <Tooltip id="tooltip" place="top" />
        </section>
    )
}