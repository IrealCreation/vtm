import { Jet } from "@/interfaces/jet";
import moment from "moment";

export default function JetDetail(props: {jet: Jet}) {

    let soif_compte = (typeof(props.jet.soif) != "undefined" ? props.jet.soif : 0);
    let compulsion_compte = (typeof(props.jet.compulsion) != "undefined" ? props.jet.compulsion : 0);

    let jsxDes: Array<JSX.Element> = [];
    if(typeof(props.jet.des) != "undefined") {
        for (let index = 0; index < props.jet.des.length; index++) {
            const de = props.jet.des[index];
            let className = "de";
            if(de >= 6) {
                className += " reussite";
            }

            if(compulsion_compte > 0) {
                className += " compulsion";
                if(index < props.jet.eveil_compulsion) {
                    className += " eveil";
                }
                compulsion_compte --;
            }
            else if(soif_compte > 0) {
                className += " soif";
                if(de == 1) {
                    className += " eveil";
                }
                soif_compte --;
            }
            
            jsxDes.push(<span className={className}>{de}</span>)
        }
    }

    let plus: string = "";
    if(props.jet.stat2 != null && props.jet.stat2 != "") {
        plus = " + ";
    }

    let bonus: string = "";
    if(props.jet.bonus != null) {
        if(props.jet.bonus > 0) {
            bonus = " + " + props.jet.bonus;
        }
        if(props.jet.bonus < 0) {
            bonus = " - " + Math.abs(props.jet.bonus);
        }
    }

    let jsxEffetCompulsion: JSX.Element = <></>;
    if(props.jet.eveil_compulsion > 0) {
        jsxEffetCompulsion = (<span className="effet-compulsion">(Compulsion) </span>)
    }

    let jsxEffetSoif: JSX.Element = <></>;
    if(props.jet.eveil_soif == 1) {
        jsxEffetSoif = (<span className="effet-soif">(Soif) </span>)
    }
    else if(props.jet.eveil_soif == 2) {
        jsxEffetSoif = (<span className="effet-soif">(Frénésie !) </span>)
    }
    
    let date:string = "";
    if(props.jet.timestamp != undefined) {
        // const dateFormat = new Date(props.jet.timestamp);
        date = moment(props.jet.timestamp).format("HH:mm DD/MM/YYYY");
        // const dateString = dateFormat.getHours() + ":" + dateFormat.getMinutes() + " " + dateFormat.getDay() + "/" + (dateFormat.getMonth() + 1) + "/" + dateFormat.getFullYear();
    }

    return(
        <div className="jet-detail">
            <span className="date">{date}</span>
            <span className="stats">[{props.jet.stat1}{plus}{props.jet.stat2}{bonus}]</span>
            <span className="reussites-nb">{props.jet.reussites} succès : </span>
            <span className="des-liste">
                {jsxDes}
            </span>
            {jsxEffetCompulsion}{jsxEffetSoif}
        </div>
    )
}