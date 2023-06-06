import { useState } from "react";
import Link from "next/link";
import TextField from "./fields/textfield"

export default function Inscription(props: {id?: string}) {
    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [valid, setValid] = useState(false);

    const updatePseudo = (value: string) => {
        setPseudo(value);
    }
    const updatePassword = (value: string) => {
        setPassword(value);
    }

    const confirm = () => {
        send();
    }

    const send = async () => {
        const response = await fetch("/api/joueur/inscription", {
            method: "POST",
            body: JSON.stringify({
                pseudo: pseudo,
                password: password
            }),
            headers: {
                "content-type": "application/json",
            },
        });
        if(response.ok) {
            setMessage("Inscription réussie !");
            setValid(true);
        }
        else {
            console.log(response);
            setValid(false);
            
            let jsonData = await response.json();
            if(jsonData?.error != null && typeof jsonData?.error === "string") {
                setMessage(jsonData.error);
            }
            else {
                console.log(jsonData)
                setMessage("Échec de l'inscription");
            }
            
        }
    }

    let jsxRedirect = <></>;
    if(valid) {
        jsxRedirect = (
            <p><Link href="/connexion">Cliquez ici pour vous connectez</Link></p>
        )
    }

    return (
        <section className="main-container">
            <div className="title-bloc">
                <div className="title-line"></div>
                <h1>Inscription</h1>
                <div className="title-line"></div>
            </div>
            
            <div>
                <TextField label="Pseudo" value={pseudo} onUpdate={updatePseudo} />
            </div>
            <div>
                <TextField label="Mot de passe" value={password} onUpdate={updatePassword} password={true} />
            </div>
            <button id="envoyer" className="btn-md" onClick={confirm}>
                Envoyer
            </button>
            <p>{message}</p>
            {jsxRedirect}
        </section>
    )
}