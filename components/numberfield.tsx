import { useEffect, useState } from 'react'

export default function NumberField(props: {label: string, tooltip?:string, min: number, max: number}) {

    // Create a UUID for label
    const [uuid, setUuid] = useState('')
    useEffect(() => setUuid(crypto.randomUUID()), []);

    return (
        <span className='number-field field' data-tooltip-id="tooltip" data-tooltip-content={props.tooltip}>
            <label htmlFor={uuid}> {props.label} </label>
            <input type="number" id={uuid} min={props.min} max={props.max} />
        </span>
    )
}