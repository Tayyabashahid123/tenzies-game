import './Dice.css';

export default function Dice(props) {
  return (
    <button
      className="dice"
      onClick={props.onClick}
      style={{
        backgroundColor: props.isFrozen ? "#59E391" : ""
      }}
      aria-pressed={props.isFrozen}
      aria-label={`Die with value ${props.number}, ${props.isFrozen ? "isFrozen" : "not frozen"}`}
    >
      {props.number}
    </button>
  );
}
