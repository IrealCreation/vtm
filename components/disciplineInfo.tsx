import { Discipline } from "@/data/disciplines";
import { useState } from 'react';
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

export default function DisciplineInfo(props: {discipline: Discipline, isVisible?: boolean}) {

    const defaultVisibility = (props.isVisible == true ? true : false);
    const [isVisible, setVisibility] = useState(defaultVisibility);

    const jsxNiveaux: Array<JSX.Element> = [];
    for (let index = 0; index < props.discipline.niveaux.length; index++) {

        let cout: JSX.Element = <></>;
        let duree: JSX.Element = <></>;
        let niveau = props.discipline.niveaux[index];

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

        jsxNiveaux.push(
            <div className="discipline-niveau" key={index + 1}>
                <h3 className="discipline-niveau-nom">{index + 1}. {niveau.nom}</h3>
                <p>{niveau.description}</p>
                <p>{duree}</p>
                <p>{cout}</p>
            </div>
        );
    }

    const handleClick = () => {
        setVisibility(!isVisible);
    }

    const arrow:JSX.Element = (
        isVisible ?
        <BsFillCaretUpFill/> :
        <BsFillCaretDownFill/>
    );

    return(
        <div id={props.discipline.nom}>
            <h2 onClick={handleClick}>{props.discipline.nom} <span className="arrow">{arrow}</span></h2>
            <div className={ isVisible ? "discipline-detail" : "discipline-detail hidden"}>
                <p>{props.discipline.description}</p>
                {jsxNiveaux}
            </div>
        </div>
    )
}