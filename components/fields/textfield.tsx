import { useEffect, useState } from 'react'

export default function TextField(props: {label?: string, value?: string, password?: boolean, onUpdate: (value: string, name: string) => void, updateParameter?: string}) {

    // Create a UUID for label
    const [uuid, setUuid] = useState('');
    useEffect(() => setUuid(crypto.randomUUID()), []);

    
    const type:string = (props.password == true ? "password" : "text");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if(props.updateParameter != null) {
            props.onUpdate(props.updateParameter, event.target.value);
        }
        else {
            props.onUpdate(event.target.value, "");
        }
        
    }

    return (
        <span className='text-field field'>
            <label htmlFor={uuid}> {props.label} </label>
            <input type={type} id={uuid} defaultValue={props.value} onChange={handleChange} />
        </span>
    )
}