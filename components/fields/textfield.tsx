import { useEffect, useState } from 'react'

export default function TextField(props: {label: string, value: string, onUpdate: (value: string) => void}) {

    // Create a UUID for label
    const [uuid, setUuid] = useState('');
    useEffect(() => setUuid(crypto.randomUUID()), []);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        props.onUpdate(event.target.value);
    }

    return (
        <span className='text-field field'>
            <label htmlFor={uuid}> {props.label} </label>
            <input type="text" id={uuid} defaultValue={props.value} onChange={handleChange} />
        </span>
    )
}