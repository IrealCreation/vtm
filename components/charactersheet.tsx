import TextField from "./fields/textfield"
import NumberField from "./fields/numberfield"
import TextAreaField from "./fields/textareafield"
import RadioField from "./fields/radiofield"
import { Tooltip } from 'react-tooltip'
import { useSelector, useDispatch } from 'react-redux'

import { attributs, attributsPhysique, attributsSocial, attributsMental } from "@/data/attributs"
import { talents, talentsPhysique, talentsSocial, talentsMental } from "@/data/talents"
import { Character } from "@/interfaces/character"
import { StoreRootState, StoreAppDispatch } from "@/redux/store"
import { setLignee } from "@/redux/store"

export default function CharacterSheet() {
    const character = useSelector((state: StoreRootState) => state.characterSlice.character)
    const dispatch = useDispatch()

    console.log(character);

    const tooltips = {
        experience: "Gain de niveau tous les 10 points d'expérience"
    };

    /* Preparing the JSX for Attributs */
    const jsxAttrPhysique: Array<JSX.Element> = [];
    const jsxAttrSocial: Array<JSX.Element> = [];
    const jsxAttrMental: Array<JSX.Element> = [];

    for (const [name, attribut] of Object.entries(attributsPhysique)) {
        jsxAttrPhysique.push(
            <div className="radio-group" key={name}>
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={attribut.description}>{attribut.nom}</span>
                <RadioField max={5} tooltip={attribut.niveaux} />
            </div>
        );
    }
    for (const [name, attribut] of Object.entries(attributsSocial)) {
        jsxAttrSocial.push(
            <div className="radio-group" key={name}>
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={attribut.description}>{attribut.nom}</span>
                <RadioField max={5} tooltip={attribut.niveaux} />
            </div>
        );
    }
    for (const [name, attribut] of Object.entries(attributsMental)) {
        jsxAttrMental.push(
            <div className="radio-group" key={name}>
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={attribut.description}>{attribut.nom}</span>
                <RadioField max={5} tooltip={attribut.niveaux} />
            </div>
        );
    }

    /* Preparing the JSX for Talents */
    const jsxTalentPhysique: Array<JSX.Element> = [];
    const jsxTalentSocial: Array<JSX.Element> = [];
    const jsxTalentMental: Array<JSX.Element> = [];

    for (const [name, talent] of Object.entries(talentsPhysique)) {
        jsxTalentPhysique.push(
            <div className="radio-group" key={name}>
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={talent.description}>{talent.nom}</span>
                <RadioField min={0} max={5} tooltip={talent.niveaux} />
            </div>
        );
    }
    for (const [name, talent] of Object.entries(talentsSocial)) {
        jsxTalentSocial.push(
            <div className="radio-group" key={name}>
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={talent.description}>{talent.nom}</span>
                <RadioField min={0} max={5} tooltip={talent.niveaux} />
            </div>
        );
    }
    for (const [name, talent] of Object.entries(talentsMental)) {
        jsxTalentMental.push(
            <div className="radio-group" key={name}>
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={talent.description}>{talent.nom}</span>
                <RadioField min={0} max={5} tooltip={talent.niveaux} />
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

            <button onClick={() => dispatch(setLignee("Ventrue"))}>Test lignée</button>
            
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
            
            <h2>Talents</h2>
            <div className="columns talents">
                <div>
                    {jsxTalentPhysique}
                </div>
                <div>
                    {jsxTalentSocial}
                </div>
                <div>
                    {jsxTalentMental}
                </div>
            </div>

            <h2>Disciplines</h2>
            
            <Tooltip id="tooltip" place="top" />
        </section>
    )
}