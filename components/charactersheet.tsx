import TextField from "./textfield"
import NumberField from "./numberfield"
import TextAreaField from "./textareafield"
import RadioField from "./radiofield"
import { Tooltip } from 'react-tooltip'

export default function CharacterSheet() {
    const tooltips = {
        experience: "Gain de niveau tous les 10 points d'expérience",
        attributs: {
            force: {
                label: "Puissance musculaire brute",
                radios: [
                    "Vous avez du mal à soulever un sac de courses",
                    "Vous vous exercez de temps en temps",
                    "Vous êtes sportif et pouvez porter de lourdes charges",
                    "Vos muscles font envie aux catcheurs professionnels",
                    "Vous êtes en compétition pour le titre de personne la plus forte au monde"
                ]
            },
            dexterite: {
                label: "Puissance musculaire brute",
                radios: [
                    "On vous appelle miss/mister catastrophe à force de faire tomber des trucs",
                    "A part des maladresses occasionnelles, vous êtes en contrôle de vos gestes",
                    "Vous savez exécuter des mouvements fins et précis",
                    "Vous avez de quoi devenir acrobate ou danseur·euse classique de talent",
                    "Vous vous mouvez avec une grâce hypnotique"
                ]
            },
            vigueur: {
                label: "Puissance musculaire brute",
                radios: [
                    "Le moindre effort physique vous laisse essouflé·e",
                    "Votre santé est correcte et vous pouvez encaisser quelques coups",
                    "Votre forme est complimentée par les médecins",
                    "Vous avez un corps robuste et une endurance de marathonien",
                    "Rien n'est capable de vous terrasser"
                ]
            },
            charisme: {
                label: "Prestance, beauté, maîtrise de son image",
                radios: [
                    "On grimace en vous voyant arriver",
                    "Vous n'éveillez pas de première réaction particulière",
                    "Vous vous faites facilement des amis",
                    "Votre magnétisme attire les gens comme des coléoptères vers la lumière",
                    "Il suffit de vous voir une fois pour se souvenir de vous à jamais"
                ]
            },
            psychologie: {
                label: "Compréhension et manipulation des interactions sociales",
                radios: [
                    "On vous dit souvent grossier en société",
                    "Il vous arrive de commettre des faux-pas, mais ils restent assez rares",
                    "Vous êtes un fin observateur des dynamiques de groupe",
                    "Vous obtenez presque toujours ce que vous voulez de vos interlocuteurs",
                    "Vous convaincriez votre pire ennemi de vous offrir sa montre"
                ]
            },
            sangfroid: {
                label: "Rester maître de ses émotions",
                radios: [
                    "Vous vous emportez pour un rien",
                    "Vous pouvez vous laisser submerger par de fortes émotions",
                    "Rares sont les fois où on vous a vu perdre votre calme",
                    "Votre poker face est absolument redoutable",
                    "Vous faites preuve d'un détachement digne du Dalaï Lama",
                ]
            },
            intelligence: {
                label: "Savoir et capacité de raisonnement",
                radios: [
                    "Vous n'avez pas eu - et n'auriez toujours pas - votre bac",
                    "Vous êtes assez intelligent pour savoir que vous ne savez pas tout",
                    "Vous n'hésitez pas à lire des articles spécialisés sur des sujets complexes",
                    "Vous n'auriez pas de mal à tenir une conversation avec Kant ou Socrate",
                    "Si une personne mérite le titre de génie, c'est bien vous",
                ]
            },
            acuite: {
                label: "Perception, temps de réaction et astuce",
                radios: [
                    "Quand il se passe quelque chose, vous êtes le dernier à réagir",
                    "Vous avez des réflexes convenables dans la vie de tous les jours",
                    "Face à une situation de danger, vous savez rapidement vous adapter",
                    "Vous êtes conscients de votre environnement même les yeux fermés",
                    "Votre sixième sens s'approche du surnaturel",
                ]
            },
            concentration: {
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
    };

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
                    <div className="radio-group">
                        <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={tooltips.attributs.force.label}>Force</span>
                        <RadioField max={5} tooltip={tooltips.attributs.force.radios} />
                    </div>
                    <div className="radio-group">
                        <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={tooltips.attributs.dexterite.label}>Dextérité</span>
                        <RadioField max={5} tooltip={tooltips.attributs.dexterite.radios} />
                    </div>
                    <div className="radio-group">
                        <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={tooltips.attributs.vigueur.label}>Vigueur</span>
                        <RadioField max={5} tooltip={tooltips.attributs.vigueur.radios} />
                    </div>
                    
                </div>
                <div>
                    <h3>Social</h3>
                    <div className="radio-group">
                        <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={tooltips.attributs.charisme.label}>Charisme</span>
                        <RadioField max={5} tooltip={tooltips.attributs.charisme.radios} />
                    </div>
                    <div className="radio-group">
                        <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={tooltips.attributs.psychologie.label}>Psychologie</span>
                        <RadioField max={5} tooltip={tooltips.attributs.psychologie.radios} />
                    </div>
                    <div className="radio-group">
                        <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={tooltips.attributs.sangfroid.label}>Sang-froid</span>
                        <RadioField max={5} tooltip={tooltips.attributs.sangfroid.radios} />
                    </div>
                </div>
                <div>
                    <h3>Mental</h3>
                    <div className="radio-group">
                        <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={tooltips.attributs.intelligence.label}>Intelligence</span>
                        <RadioField max={5} tooltip={tooltips.attributs.intelligence.radios} />
                    </div>
                    <div className="radio-group">
                        <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={tooltips.attributs.acuite.label}>Acuité</span>
                        <RadioField max={5} tooltip={tooltips.attributs.acuite.radios} />
                    </div>
                    <div className="radio-group">
                        <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={tooltips.attributs.concentration.label}>Concentration</span>
                        <RadioField max={5} tooltip={tooltips.attributs.concentration.radios} />
                    </div>
                </div>
            </div>
            
            <Tooltip id="tooltip" place="top" />
        </section>
    )
}