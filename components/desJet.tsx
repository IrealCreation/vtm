import Link from "next/link";
import { useEffect, useState } from "react";
import { Jet } from "@/interfaces/jet";
import { Character } from "@/interfaces/character";
import DesButton from "./desButton";
import NumberField from "./fields/numberfield";
import JetDetail from "./jetDetail";
import { generateCharacter } from "@/redux/store";

export default function DesJet(props: {isLogged: boolean, id?:number}) {

    const [character, setCharacter] = useState<Character>(generateCharacter());
    const [loaded, setLoaded] = useState<boolean>(false);
    const [stat1, setStat1] = useState<string>("");
    const [stat2, setStat2] = useState<string>("");
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(0);
    const [bonus, setBonus] = useState<number>(0);
    const [jets, setJets] = useState<Array<Jet>>([]);

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
                stat1: stat1,
                stat2: stat2,
                bonus: bonus
            }),
            headers: {
                "content-type": "application/json",
            },
        });
        if(response.ok) {
            const jsonData = await response.json();
            const jet = jsonData.jet as Jet;
            console.log(jet);
            setJets([
                jet,
                ...jets
            ]);
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

        const jsxStatsTalents: Array<JSX.Element> = [];
        for (const [name, characterTalent] of Object.entries(character.talents)) {
            let active = (stat1 == characterTalent.talent.nom || stat2 == characterTalent.talent.nom ? true : false)
            jsxStatsTalents.push(
                <DesButton stat={characterTalent.talent.nom} value={characterTalent.niveau} onClick={choixStat} active={active} />
            );
        }

        const jsxStatsDisciplines: Array<JSX.Element> = [];
        for (const [name, characterDiscipline] of Object.entries(character.disciplines)) {
            let active = (stat1 == characterDiscipline.discipline.nom || stat2 == characterDiscipline.discipline.nom ? true : false)
            jsxStatsDisciplines.push(
                <DesButton stat={characterDiscipline.discipline.nom} value={characterDiscipline.niveau} onClick={choixStat} active={active} />
            );
        }

        jsxStats = (
            <>
                <h2>Attributs</h2>
                <div className="des-columns">
                    {jsxStatsAttributs}
                </div>
                <h2>Talents</h2>
                <div className="des-columns">
                    {jsxStatsTalents}
                </div>
                <h2>Disciplines</h2>
                <div className="des-columns">
                    {jsxStatsDisciplines}
                </div>
            </>
        )
    }

    return (
        <div>
            {jsxStats}
            <h2>Historique des jets</h2>
            <div className="historique-jets">
                {jets.map((jet:Jet) => (
                    <JetDetail key={jet.id != null ? jet.id : JSON.stringify(jet)} jet={jet} />
                ))}
            </div>
            <div className="recapitulatif columns">
                <div>
                    <p>{stat1} {stat1 != "" ? ":" : ""} {stat1 != "" ? value1 : ""}</p>
                    <p>{stat2} {stat2 != "" ? ":" : ""} {stat2 != "" ? value2 : ""}</p>
                </div>
                <div>
                    <p>Dés à lancer : {value1 + value2 + bonus}</p>
                    <p>Soif : X</p>
                </div>
                <div>
                    <NumberField min={-10} max={10} label="Bonus :" value={bonus} onUpdate={(value) => { setBonus(value) }} />
                </div>
                <div>
                    <button id="envoyer" className="btn-md" onClick={faireJet}>
                        Lancer les dés
                    </button>
                </div>
            </div>
            
        </div>
    )
}