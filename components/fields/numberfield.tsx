import { useEffect, useState } from 'react'

export default function NumberField(
    props: { label: string, tooltip?:string, min: number, max: number, value: number, onUpdate: (value: number) => void }
) {

    // Create a UUID for label
    const [uuid, setUuid] = useState('')
    useEffect(() => setUuid(crypto.randomUUID()), []);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        let value: number = +event.target.value;
        props.onUpdate(value);
    }

    return (
        <span className='number-field field' data-tooltip-id="tooltip" data-tooltip-content={props.tooltip}>
            <label htmlFor={uuid}> {props.label} </label>
            <input type="number" id={uuid} defaultValue={props.value} min={props.min} max={props.max} onChange={handleChange} />
        </span>
    )
}