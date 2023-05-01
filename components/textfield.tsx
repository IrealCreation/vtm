import { useEffect, useState } from 'react'

export default function TextField(props: {label: string}) {

    // Create a UUID for label
    const [uuid, setUuid] = useState('')
    useEffect(() => setUuid(crypto.randomUUID()), [])

    return (
        <span className='text-field field'>
            <label htmlFor={uuid}> {props.label} </label>
            <input type="text" id={uuid} />
        </span>
    )
}