import { useEffect, useState } from 'react'

export default function TextAreaField(props: {label: string}) {

    // Create a UUID for label
    const [uuid, setUuid] = useState('')
    useEffect(() => setUuid(crypto.randomUUID()), [])

    return (
        <div className='textarea-field field'>
            <label htmlFor={uuid}> {props.label} </label>
            <textarea id={uuid}></textarea>
        </div>
    )
}