import { Jet } from "@/interfaces/jet";
import moment from "moment";

export default function JetDetail(props: {jet: Jet}) {

    let jsxDes: Array<JSX.Element> = [];
    if(typeof(props.jet.des) != "undefined") {
        for (let index = 0; index < props.jet.des.length; index++) {
            const de = props.jet.des[index];
            let className = "de";
            if(de >= 6) {
                className += " reussite";
            }
            if(typeof(props.jet.soif) != "undefined" && index < props.jet.soif) {
                className += " soif";
                if(de == 1) {
                    className += " compulsion";
                }
            }
            
            jsxDes.push(<span className={className}>{de}</span>)
        }
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

    let jsxEffetSoif: JSX.Element = <></>;
    if(typeof(props.jet.compulsions) != "undefined") {
        if(props.jet.compulsions == 1) {
            jsxEffetSoif = (<span className="effet-soif">(Compulsion)</span>)
        }
        else if(props.jet.compulsions == 2) {
            jsxEffetSoif = (<span className="effet-soif">(Frénésie !)</span>)
        }
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
            <span className="stats">[{props.jet.stat1} + {props.jet.stat2}{bonus}]</span>
            <span className="reussites-nb">{props.jet.reussites} succès : </span>
            <span className="des-liste">
                {jsxDes}
            </span>
            {jsxEffetSoif}
        </div>
    )
}