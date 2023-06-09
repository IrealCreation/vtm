import Link from "next/link";
import { useEffect, useState } from "react";
import { Jet } from "@/interfaces/jet";
import { Character } from "@/interfaces/character";
import { attributsPhysique, attributsSocial, attributsMental } from "@/data/attributs"
import { talentsPhysique, talentsSocial, talentsMental } from "@/data/talents"
import DesButton from "./desButton";
import { generateCharacter } from "@/redux/store";

export default function DesJet(props: {isLogged: boolean, id?:number}) {

    const [character, setCharacter] = useState<Character>(generateCharacter());
    const [loaded, setLoaded] = useState<boolean>(false);

    const [stat1, setStat1] = useState<string>("");
    const [stat2, setStat2] = useState<string>("");
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(0);

    useEffect(() => {
        if(props.isLogged) {
            if(props.id != null) {
                getCharacter(props.id);
            }
            else {
                getCharacter();
            }
        }
    }, [props.isLogged, props.id])

    const getCharacter = async (id?: number) => {
        let url: string;
        if(id != null) {
            url = "/api/perso/" + id;
        }
        else {
            url = "/api/perso";
        }
        
        const response = await fetch(url, {
            method: "GET"
        });
        if(response.ok) {
            const jsonData = await response.json();
            const fiche = JSON.parse(jsonData.fiche) as Character;
            setCharacter(fiche);
            setLoaded(true);
        }
        else {
            console.log(response);
        }
    }

    const faireJet = async () => {
        let url = "/api/perso/jet/";
        
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                stat1: "Domination",
                stat2: "Psychologie"
            }),
            headers: {
                "content-type": "application/json",
            },
        });
        if(response.ok) {
            const jsonData = await response.json();
            console.log(jsonData);
            const jet = jsonData.jet as Jet;
            console.log(jet);
        }
        else {
            console.log(response);
        }
    }

    const choixStat = (stat: string, value: number) => {
        // Désactivation d'une stat ?
        if(stat1 == stat) {
            setStat1("");
            setValue1(0);
        }
        else if(stat2 == stat) {
            setStat2("");
            setValue2(0);
        }
        else {
            if(stat1 == "") {
                setStat1(stat);
                setValue1(value);
            }
            else {
                setStat2(stat);
                setValue2(value);
            }
        }
    }

    let jsxStats: JSX.Element = <></>;
    if(!loaded) {
        jsxStats = (<p>Chargement de la fiche personnage...</p>)
    }
    else {
        const jsxStatsAttributs: Array<JSX.Element> = [];

        for (const [name, characterAttribut] of Object.entries(character.attributs)) {
            let active = (stat1 == characterAttribut.attribut.nom || stat2 == characterAttribut.attribut.nom ? true : false)
            jsxStatsAttributs.push(
                <DesButton stat={characterAttribut.attribut.nom} value={characterAttribut.niveau} onClick={choixStat} active={active} />
            );
        }

        jsxStats = (
            <>
                <h2>Attributs</h2>
                <div className="des-columns">
                    {jsxStatsAttributs}
                </div>
                
            </>
        )
    }

    return (
        <div>
            {jsxStats}
            <div className="recapitulatif">
                <p>{stat1} : {value1}</p>
                <p>{stat2} : {value2}</p>
                <p>Dés à lancer : {value1 + value2} (X Soif)</p>
                <div>
                    <button id="envoyer" className="btn-md" onClick={faireJet}>
                        Lancer les dés
                    </button>
                </div>
            </div>
            
        </div>
    )
}