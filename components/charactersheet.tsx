import TextField from "./textfield"
import NumberField from "./numberfield"
import TextAreaField from "./textareafield"
import { Tooltip } from 'react-tooltip'

export default function CharacterSheet() {
    return (
        <section className="character-sheet">
            <div className="title-bloc">
                <div className="title-line"></div>
                <h1>Fiche de personnage</h1>
                <div className="title-line"></div>
            </div>
            
            <TextField label="Nom" />
            <TextField label="Lignée" />
            <NumberField label="Niveau" min={0} max={999} />
            <NumberField label="Expérience" min={0} max={10} tooltip="Gain de niveau tous les 10 points d'expérience" />
            <div className="flex">
                <TextAreaField label="Apparence" />
                <TextAreaField label="Caractère" />
            </div>

            <h2>Attributs</h2>

            
            <Tooltip id="tooltip" place="top" />
        </section>
    )
}