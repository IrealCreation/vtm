import { useState } from "react";
import Link from "next/link";
import TextField from "./fields/textfield"

export default function Connexion(props: {id?: string}) {
    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

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
        console.log("sendCharacter");
        const response = await fetch("/api/joueur/connexion", {
            method: "POST",
            body: JSON.stringify({
                pseudo: pseudo,
                password: password
            }),
            headers: {
                "content-type": "application/json",
            },
        });
        console.log(response);
        if(response.ok) {
            setMessage("Connexion réussie !");
            let jsonData = await response.json();

            // Store the user informations in the localStorage
            localStorage.setItem("id", jsonData.joueur.id)
        }
        else {
            setMessage("Échec de la connexion");
            let jsonData = await response.json();
            try {
                setMessage(jsonData.error);
            }
            catch {
                console.log(jsonData);
            }
        }
    }

    return (
        <section className="main-container">
            <div className="title-bloc">
                <div className="title-line"></div>
                <h1>Connexion</h1>
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
        </section>
    )
}