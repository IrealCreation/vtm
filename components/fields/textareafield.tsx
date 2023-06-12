import { useEffect, useState } from 'react'

export default function TextAreaField(props: {label: string, value?: string, onUpdate: (value: string) => void}) {

    // Create a UUID for label
    const [uuid, setUuid] = useState('')
    useEffect(() => setUuid(crypto.randomUUID()), [])

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        console.log(event.target.value);
        props.onUpdate(event.target.value);
    }

    return (
        <div className='textarea-field field'>
            <label htmlFor={uuid}> {props.label} </label>
            <textarea id={uuid} value={props.value} onChange={handleChange}></textarea>
        </div>
    )
}