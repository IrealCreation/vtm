import { useEffect, useState } from 'react'

export default function CheckField(props: {label?: string, onUpdate: (value: boolean) => void}) {

    // Create a UUID for label
    const [uuid, setUuid] = useState('');
    useEffect(() => setUuid(crypto.randomUUID()), []);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        props.onUpdate(event.target.checked);
    }

    return (
        <span className='check-field field'>
            <input type="checkbox" id={uuid} onChange={handleChange} />
            <label htmlFor={uuid}> {props.label} </label>
        </span>
    )
}