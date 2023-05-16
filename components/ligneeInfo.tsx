import { useState } from 'react';
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { Lignee, lignees } from '@/data/lignees';
import Link from 'next/link';

export default function LigneeInfo(props: {lignee: Lignee}) {

    const [isVisible, setVisibility] = useState(false);

    const jsxDisciplines: Array<JSX.Element> = [];
    for (let index = 0; index < props.lignee.disciplines.length; index++) {

        let discipline = props.lignee.disciplines[index];
        let href = "/disciplines#" + discipline.nom;

        jsxDisciplines.push(
            <div className="discipline" key={discipline.nom}>
                <h4>{discipline.nom}</h4>
                <p>{discipline.description}</p>
                <p><Link href={href}>Voir le détail</Link></p>
            </div>
        );
    }

    const handleClick = () => {
        setVisibility(!isVisible);
        console.log(isVisible);
    }

    const arrow:JSX.Element = (
        isVisible ?
        <BsFillCaretUpFill/> :
        <BsFillCaretDownFill/>
    );

    return(
        <div id={props.lignee.nom}>
            <h2 onClick={handleClick}>{props.lignee.nom} <span className="arrow">{arrow}</span></h2>
            <div className={ isVisible ? "discipline-detail" : "discipline-detail hidden"}>
                <p>Les &quot;{props.lignee.surnom}&quot;</p>
                <p>{props.lignee.description}</p>
                <p>{props.lignee.regle}</p>
                <h3>Disciplines</h3>
                <div className="columns">
                    {jsxDisciplines}
                </div>
            </div>
        </div>
    )
}