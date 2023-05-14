import TextField from "./fields/textfield"
import NumberField from "./fields/numberfield"
import TextAreaField from "./fields/textareafield"
import RadioField from "./fields/radiofield"
import DisciplineField from "./fields/disciplinefield"
import SelectField from "./fields/selectfield"
import { Tooltip } from 'react-tooltip'
import { useSelector, useDispatch } from 'react-redux'

import { attributsPhysique, attributsSocial, attributsMental } from "@/data/attributs"
import { talentsPhysique, talentsSocial, talentsMental } from "@/data/talents"
import { lignees } from "@/data/lignees"
import { ressources } from "@/data/ressources"
import { StoreRootState, StoreAppDispatch, setNiveau } from "@/redux/store"
import { setLignee, setNom, setExperience, setActivite, setApparence, setPersonnalite, setTalent, setAttribut, setDiscipline, setRessourceNiveau, setRessourceDetail } from "@/redux/store"

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
    const updateActivite = (value: string) => {
        dispatch(setActivite(value));
    }
    const updateLignee = (value: string) => {
        dispatch(setLignee(value));
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
    const updateDiscipline = (name: string, value: number) => {
        dispatch(setDiscipline({name: name, value: value}));
    }
    const updateRessourceNiveau = (name: string, value: number) => {
        dispatch(setRessourceNiveau({name: name, value: value}));
    }
    const updateRessourceDetail = (name: string, value: string) => {
        dispatch(setRessourceDetail({name: name, value: value}));
    }

    /* Preparing the JSX for Attributs */
    const jsxAttrPhysique: Array<JSX.Element> = [];
    const jsxAttrSocial: Array<JSX.Element> = [];
    const jsxAttrMental: Array<JSX.Element> = [];

    for (const [name, attribut] of Object.entries(attributsPhysique)) {
        jsxAttrPhysique.push(
            <div className="radio-group" key={name}>
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={attribut.description}>{attribut.nom}</span>
                <RadioField max={5} tooltip={attribut.niveaux} value={character.attributs[attribut.nom].niveau} onUpdate={updateAttribut} updateParameter={attribut.nom} />
            </div>
        );
    }
    for (const [name, attribut] of Object.entries(attributsSocial)) {
        jsxAttrSocial.push(
            <div className="radio-group" key={name}>
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={attribut.description}>{attribut.nom}</span>
                <RadioField max={5} tooltip={attribut.niveaux} value={character.attributs[attribut.nom].niveau} onUpdate={updateAttribut} updateParameter={attribut.nom} />
            </div>
        );
    }
    for (const [name, attribut] of Object.entries(attributsMental)) {
        jsxAttrMental.push(
            <div className="radio-group" key={name}>
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={attribut.description}>{attribut.nom}</span>
                <RadioField max={5} tooltip={attribut.niveaux} value={character.attributs[attribut.nom].niveau} onUpdate={updateAttribut} updateParameter={attribut.nom} />
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

    /* Preparing the JSX for Disciplines */
    const jsxDisciplines: Array<JSX.Element> = [];
    if(character.disciplines != null) {
        for (const [name, characterDiscipline] of Object.entries(character.disciplines)) {
            jsxDisciplines.push(
                <DisciplineField 
                    key={name} 
                    name={characterDiscipline.discipline.nom}
                    description={characterDiscipline.discipline.description}
                    levels={characterDiscipline.discipline.niveaux}
                    value={characterDiscipline.niveau}
                    onUpdate={updateDiscipline}
                    updateParameter={name}
                ></DisciplineField>
            );
        }
    }

    /* Preparing the JSX for Ressources */
    const jsxRessources: Array<JSX.Element> = [];
    for (const [name, ressource] of Object.entries(ressources)) {
        jsxRessources.push(
            <div className="radio-group" key={name}>
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={ressource.description}>{ressource.nom}</span>
                <RadioField min={0} max={3} tooltip={ressource.niveaux} value={character.ressources[ressource.nom].niveau} onUpdate={updateRessourceNiveau} updateParameter={ressource.nom} />
                <TextField label="Détail" value={character.ressources[ressource.nom].detail} onUpdate={updateRessourceDetail} updateParameter={ressource.nom}/>
            </div>
        )
    }

    return (
        <section className="character-sheet main-container">
            <div className="title-bloc">
                <div className="title-line"></div>
                <h1>Fiche de personnage</h1>
                <div className="title-line"></div>
            </div>
            
            <TextField label="Nom" value={character.nom} onUpdate={updateNom} />
            <SelectField label="Lignée" value={character.lignee?.nom} onUpdate={updateLignee} options={Object.keys(lignees)} />
            <TextField label="Activité" value={character.activite} onUpdate={updateActivite} />
            <br/>
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
            <div className="columns disciplines">
                {jsxDisciplines}
            </div>

            <h2>Ressources</h2>
            <div className="ressources">
                {jsxRessources}
            </div>
            
            <Tooltip id="tooltip" place="top" />
        </section>
    )
}