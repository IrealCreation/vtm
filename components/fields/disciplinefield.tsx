import { BsRecord as RadioEmpty, BsRecord2 as RadioFill } from "react-icons/bs";
import { DisciplineNiveau } from "@/data/disciplines";

export default function DisciplineField(props: { 
    name: string, description: string, levels: Array<DisciplineNiveau>, value:number, onUpdate: (name: string, value: number) => void, updateParameter: string
}) {

    let jsx: Array<JSX.Element> = [];

    jsx.push(
        <div key="0" className="reset" onClick={() => radioPress(0)} data-tooltip-id="tooltip" data-tooltip-content="Remise à zéro">x</div>
    );

    for (let index = 0; index < props.levels.length; index++) {

        let radio: JSX.Element;
        let cout: JSX.Element = <></>;
        let duree: JSX.Element = <></>;
        let niveau = props.levels[index];

        if(index < props.value) {
            radio = <RadioFill />
        }
        else {
            radio = <RadioEmpty />;
        }

        if(niveau.cout != null) {
            if(typeof(niveau.cout) == "number") {
                cout = <>Coût : {niveau.cout} PS.</>;
            }
            else {
                cout = <>Coût : {niveau.cout}.</>;
            }
        }

        if(niveau.duree != null) {
            duree = <>Durée : {niveau.duree}.</>;
        }

        jsx.push(
        <div className="discipline-niveau" key={index + 1}>
            <header onClick={() => radioPress(index + 1)}>
                {radio} 
                <span className="discipline-niveau-nom">{niveau.nom}</span>
            </header>
            <p>{niveau.description}</p>
            <p>{cout} {duree}</p>
        </div>);
    }

    function radioPress(newValue:number) {
        // console.log(newValue);
        props.onUpdate(props.updateParameter, newValue);
    }

    return(
        <div className="discipline">
            <h3>{props.name}</h3>
            {jsx}
        </div>
    )
}