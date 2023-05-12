import { BsRecord as RadioEmpty, BsRecord2 as RadioFill } from "react-icons/bs";

export default function RadioField(props: { 
    min?: number, max: number, tooltip?: Array<string>, value:number, onUpdate: (name: string, value: number) => void, updateParameter: string
}) {

    const min = (props.min != null ? props.min : 1);
    let radios: Array<JSX.Element> = [];

    if(min == 0) {
        radios.push(<span key="0" className="reset" onClick={() => radioPress(0)} data-tooltip-id="tooltip" data-tooltip-content="Remise à zéro">x</span>);
    }

    for (let index = 0; index < props.max; index++) {

        let add: JSX.Element;

        if(index < props.value) {
            add = <RadioFill key={index + 1} onClick={() => radioPress(index + 1)} />;
            if(props.tooltip != null && props.tooltip[index] != null) {
                add = <RadioFill key={index + 1} onClick={() => radioPress(index + 1)} data-tooltip-id="tooltip" data-tooltip-content={props.tooltip[index]}/>
            }
        }
        else {
            add = <RadioEmpty key={index + 1} onClick={() => radioPress(index + 1)} />;
            if(props.tooltip != null && props.tooltip[index] != null) {
                add = <RadioEmpty key={index + 1} onClick={() => radioPress(index + 1)} data-tooltip-id="tooltip" data-tooltip-content={props.tooltip[index]}/>
            }
        }

        radios.push(add);
    }

    function radioPress(newValue:number) {
        // console.log(newValue);
        props.onUpdate(props.updateParameter, newValue);
    }

    return(
        <span className="radio-field">
            {radios}
        </span>
    )
}