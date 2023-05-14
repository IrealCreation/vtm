import { useEffect, useState } from 'react'

export default function SelectField(props: {label: string, options: Array<string>, value?: string, onUpdate: (value: string) => void}) {

    // Create a UUID for label
    const [uuid, setUuid] = useState('');
    useEffect(() => setUuid(crypto.randomUUID()), []);

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        props.onUpdate(event.target.value);
    }

    return (
        <span className='select-field field' key={props.label}>
            <label htmlFor={uuid}> {props.label} </label>
            <select id={uuid} defaultValue={(props.value != null ? props.value : "")} onChange={handleChange} >
                <option value="" disabled hidden>Choisir...</option>
                {props.options.map((value:string, index:number) => {
                    return(<option key={value} value={value}>{value}</option>);
                })}
            </select>
        </span>
    )
}