import TextField from "./fields/textfield"
import NumberField from "./fields/numberfield"
import TextAreaField from "./fields/textareafield"
import RadioField from "./fields/radiofield"
import { Tooltip } from 'react-tooltip'
import { useSelector, useDispatch } from 'react-redux'

import { attributs, attributsPhysique, attributsSocial, attributsMental } from "@/data/attributs"
import { talents, talentsPhysique, talentsSocial, talentsMental } from "@/data/talents"
import { Character } from "@/interfaces/character"
import { StoreRootState, StoreAppDispatch, setNiveau } from "@/redux/store"
import { setLignee, setNom, setExperience, setApparence, setPersonnalite, setTalent, setAttribut } from "@/redux/store"

export default function CharacterSheet() {
    const character = useSelector((state: StoreRootState) => state.characterSlice.character)
    const dispatch = useDispatch()

    console.log(character);

    const tooltips = {
        experience: "Gain de niveau tous les 10 points d'expérience"
    };

    const updateNom = (value: string) => {
        dispatch(setNom(value));
    }
    const updateNiveau = (value: number) => {
        dispatch(setNiveau(value));
    }
    const updateExperience = (value: number) => {
        dispatch(setExperience(value));
    }
    const updateApparence = (value: string) => {
        dispatch(setApparence(value));
    }
    const updatePersonnalite = (value: string) => {
        dispatch(setPersonnalite(value));
    }
    const updateTalent = (name: string, value: number) => {
        dispatch(setTalent({name: name, value: value}));
    }
    const updateAttribut = (name: string, value: number) => {
        dispatch(setAttribut({name: name, value: value}));
    }

    /* Preparing the JSX for Attributs */
    const jsxAttrPhysique: Array<JSX.Element> = [];
    const jsxAttrSocial: Array<JSX.Element> = [];
    const jsxAttrMental: Array<JSX.Element> = [];

    for (const [name, attribut] of Object.entries(attributsPhysique)) {
        jsxAttrPhysique.push(
            <div className="radio-group" key={name}>
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={attribut.description}>{attribut.nom}</span>
                <RadioField max={5} tooltip={attribut.niveaux} value={character.attributs[attribut.nom].niveau} onUpdate={updateTalent} updateParameter={attribut.nom} />
            </div>
        );
    }
    for (const [name, attribut] of Object.entries(attributsSocial)) {
        jsxAttrSocial.push(
            <div className="radio-group" key={name}>
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={attribut.description}>{attribut.nom}</span>
                <RadioField max={5} tooltip={attribut.niveaux} value={character.attributs[attribut.nom].niveau} onUpdate={updateTalent} updateParameter={attribut.nom} />
            </div>
        );
    }
    for (const [name, attribut] of Object.entries(attributsMental)) {
        jsxAttrMental.push(
            <div className="radio-group" key={name}>
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={attribut.description}>{attribut.nom}</span>
                <RadioField max={5} tooltip={attribut.niveaux} value={character.attributs[attribut.nom].niveau} onUpdate={updateTalent} updateParameter={attribut.nom} />
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
                <RadioField min={0} max={5} tooltip={talent.niveaux} value={character.talents[talent.nom].niveau} onUpdate={updateTalent} updateParameter={talent.nom} />
            </div>
        );
    }
    for (const [name, talent] of Object.entries(talentsSocial)) {
        jsxTalentSocial.push(
            <div className="radio-group" key={name}>
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={talent.description}>{talent.nom}</span>
                <RadioField min={0} max={5} tooltip={talent.niveaux} value={character.talents[talent.nom].niveau} onUpdate={updateTalent} updateParameter={talent.nom} />
            </div>
        );
    }
    for (const [name, talent] of Object.entries(talentsMental)) {
        jsxTalentMental.push(
            <div className="radio-group" key={name}>
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={talent.description}>{talent.nom}</span>
                <RadioField min={0} max={5} tooltip={talent.niveaux} value={character.talents[talent.nom].niveau} onUpdate={updateTalent} updateParameter={talent.nom} />
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
            
            <TextField label="Nom" value={character.nom} onUpdate={updateNom} />
            {/* <TextField label="Lignée" /> */}
            <NumberField label="Niveau" min={0} max={999} value={character.niveau} onUpdate={updateNiveau} />
            <NumberField label="Expérience" min={0} max={10} value={character.experience} tooltip={tooltips.experience} onUpdate={updateExperience} />

            <div className="flex">
                <TextAreaField label="Apparence" value={character.apparence} onUpdate={updateApparence} />
                <TextAreaField label="Personnalité" value={character.personnalite} onUpdate={updatePersonnalite} />
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