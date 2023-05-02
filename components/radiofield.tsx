import { BsRecord as RadioEmpty, BsRecord2 as RadioFill } from "react-icons/bs";

export default function RadioField(props: {max: number, tooltip?: Array<string>}) {

    const radios: Array<JSX.Element> = [];

    for (let index = 0; index < props.max; index++) {

        let add: JSX.Element = <RadioEmpty onClick={() => radioPress(index + 1)} />;
        if(props.tooltip != null && props.tooltip[index] != null) {
            add = <RadioEmpty data-tooltip-id="tooltip" data-tooltip-content={props.tooltip[index]}/>
        }

        radios.push(add);
    }

    function radioPress(value:number) {
        console.log(value);
    }

    return(
        <span className="radio-field">
            {radios}
        </span>
    )
}