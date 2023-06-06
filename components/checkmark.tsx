import { useEffect, useState } from 'react'
import { BsCheckCircle as Mark } from 'react-icons/bs';

export default function Checkmark(props: {visible: boolean}) {
    
    if(props.visible) {
        return (
            <div className="checkmark visible">
                <Mark />
            </div>
        )
    }
    else {
        return (
            <div className="checkmark">
                <Mark />
            </div>
        )
    }
}