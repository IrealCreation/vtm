import TextField from "./fields/textfield"
import NumberField from "./fields/numberfield"
import TextAreaField from "./fields/textareafield"
import RadioField from "./fields/radiofield"
import { Tooltip } from 'react-tooltip'

import attributs from "@/data/attributs"
import { talents } from "@/data/talents"

export default function CharacterSheet() {
    const tooltips = {
        experience: "Gain de niveau tous les 10 points d'expérience"
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
                <RadioField max={5} tooltip={physique.tooltip.niveaux} />
            </div>
        );

        jsxAttrSocial.push(
            <div className="radio-group">
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={social.tooltip.label}>{social.titre}</span>
                <RadioField max={5} tooltip={social.tooltip.niveaux} />
            </div>
        );

        jsxAttrMental.push(
            <div className="radio-group">
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={mental.tooltip.label}>{mental.titre}</span>
                <RadioField max={5} tooltip={mental.tooltip.niveaux} />
            </div>
        );
    }

    /* Preparing the JSX for Talents */
    const jsxTalentPhysique: Array<JSX.Element> = [];
    const jsxTalentSocial: Array<JSX.Element> = [];
    const jsxTalentMental: Array<JSX.Element> = [];

    for (let index = 0; index < talents.physique.length; index++) {
        let physique = talents.physique[index];
        let social = talents.social[index];
        let mental = talents.mental[index];

        jsxTalentPhysique.push(
            <div className="radio-group">
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={physique.tooltip.label}>{physique.titre}</span>
                <RadioField min={0} max={5} tooltip={physique.tooltip.niveaux} />
            </div>
        );

        jsxTalentSocial.push(
            <div className="radio-group">
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={social.tooltip.label}>{social.titre}</span>
                <RadioField min={0} max={5} tooltip={social.tooltip.niveaux} />
            </div>
        );

        jsxTalentMental.push(
            <div className="radio-group">
                <span className="radio-label" data-tooltip-id="tooltip" data-tooltip-content={mental.tooltip.label}>{mental.titre}</span>
                <RadioField min={0} max={5} tooltip={mental.tooltip.niveaux} />
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