import TextField from "./fields/textfield"
import NumberField from "./fields/numberfield"
import TextAreaField from "./fields/textareafield"
import RadioField from "./fields/radiofield"
import DisciplineField from "./fields/disciplinefield"
import SelectField from "./fields/selectfield"
import { Tooltip } from 'react-tooltip'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"

import { attributsPhysique, attributsSocial, attributsMental } from "@/data/attributs"
import { talentsPhysique, talentsSocial, talentsMental } from "@/data/talents"
import { lignees } from "@/data/lignees"
import { ressources } from "@/data/ressources"
import { StoreRootState, StoreAppDispatch, setNiveau } from "@/redux/store"
import { setCharacter, setLignee, setNom, setExperience, setActivite, setApparence, setPersonnalite, setTalent, setAttribut, setDiscipline, setRessourceNiveau, setRessourceDetail, computeEtat } from "@/redux/store"
import { Character } from "@/interfaces/character"

export default function FichePerso(props: {isLogged?: boolean}) {
    const character = useSelector((state: StoreRootState) => state.characterSlice.character)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(props.isLogged) {
            getCharacter();
        }
        dispatch(computeEtat());
    }, [])

    const tooltips = {
        experience: "Gain de niveau tous les 10 points d'expérience",
        sante: "La quantité de blessures physiques que vous pouvez subir",
        santeQte: "Vigueur + 3",
        volonte: "La volonté permet de relancer les dés d'une action, de résister à la Frénésie ou aux influences mentales / sociales",
        volonteQte: "Sang-froid + Détermination + 1",
        sang: "Utilisé pour lancer des disciplines vampiriques"
    };

    const updateNom = (value: string) => {
        dispatch(setNom(value));
    }
    const updateActivite = (value: string) => {
        dispatch(setActivite(value));
    }
    const updateLignee = (value: string) => {
        dispatch(setLignee(value));
        dispatch(computeEtat());
    }
    const updateNiveau = (value: number) => {
        dispatch(setNiveau(value));
        dispatch(computeEtat());
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
    const updateAttribut = (name: string, value: number) => {
        dispatch(setAttribut({name: name, value: value}));
        dispatch(computeEtat());
    }
    const updateTalent = (name: string, value: number) => {
        dispatch(setTalent({name: name, value: value}));
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
    const save = () => {
        sendCharacter();
    }

    const sendCharacter = async () => {
        console.log("sendCharacter");
        const response = await fetch("/api/perso", {
            method: "POST",
            body: JSON.stringify({
                character: character,
            }),
            headers: {
                "content-type": "application/json",
            },
        });
        if(response.ok) {
            const jsonData = await response.json();
            console.log(jsonData);
        }
        else {
            console.log(response);
        }
    }

    const getCharacter = async () => {
        const url = "/api/perso";
        const response = await fetch(url, {
            method: "GET"
        });
        if(response.ok) {
            const jsonData = await response.json();
            const fiche = JSON.parse(jsonData.fiche) as Character;
            console.log(fiche);
            dispatch(setCharacter(fiche));
        }
        else {
            console.log(response);
        }
    }

    let jsxLignee: JSX.Element = <></>;
    if(character.lignee != null) {
        jsxLignee = (
            <>
                <p>Les &quot;{character.lignee?.surnom}&quot;</p>
                <p>{character.lignee?.description}</p>
                <p>{character.lignee?.regle}</p>
            </>
        )
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

    const jsxSave: JSX.Element = (props.isLogged ? 
        (<button id="save" className="btn-md" onClick={save}>Sauvegarder</button>) :
        <></>
    );

    return (
        <section className="character-sheet main-container">
            <div className="title-bloc">
                <div className="title-line"></div>
                <h1>Fiche de personnage</h1>
                <div className="title-line"></div>
            </div>
            
            <TextField label="Nom" value={character.nom} onUpdate={updateNom} />
            <TextField label="Activité" value={character.activite} onUpdate={updateActivite} />
            <NumberField label="Niveau" min={0} max={999} value={character.niveau} onUpdate={updateNiveau} />
            <NumberField label="Expérience" min={0} max={10} value={character.experience} tooltip={tooltips.experience} onUpdate={updateExperience} />
            
            <div className="lignee-container">
                <SelectField label="Lignée" value={character.lignee?.nom} onUpdate={updateLignee} options={Object.keys(lignees)} />
                <div className="lignee-description">
                    {jsxLignee}
                </div>
            </div>

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

            <h2>Etat</h2>
            <div className="columns etat">
                <div>
                    <h3 data-tooltip-id="tooltip" data-tooltip-content={tooltips.sante}>Santé</h3>
                    <p data-tooltip-id="tooltip" data-tooltip-content={tooltips.santeQte}>{character.santeMax}</p>
                </div>
                <div>
                    <h3 data-tooltip-id="tooltip" data-tooltip-content={tooltips.volonte}>Volonté</h3>
                    <p data-tooltip-id="tooltip" data-tooltip-content={tooltips.volonteQte}>{character.volonteMax}</p>
                </div>
                <div>
                    <h3 data-tooltip-id="tooltip" data-tooltip-content={tooltips.sang}>Sang</h3>
                    <p>{character.sangMax}</p>
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
            
            {jsxSave}
            <Tooltip id="tooltip" place="top" />
        </section>
    )
}