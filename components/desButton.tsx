export default function DesButton(props: {stat: string, value: number, active: boolean, onClick: (stat: string, value: number) => void}) {

    let className = "button-des";
    if(props.active) {
        className = "button-des active"
    }

    return (
        <button className={className} onClick={() => { props.onClick(props.stat, props.value) }}>
            {props.stat}
        </button>
    )
}