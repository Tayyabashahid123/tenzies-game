import './Dice.css'
export default function Dice(props){
    return <button
        className="dice"
        onClick = {props.onClick}
        style={{
            backgroundColor: props.isFrozen ? "#59E391" : ""
        }}
        >
        {props.number}
        </button>
        }
        