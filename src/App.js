import { useEffect, useState, useRef } from 'react';
import './App.css';
import Dice from './Dice.js';
import { nanoid } from "nanoid";
import Confetti from 'react-confetti';

function App() {
  const [dice, setDice] = useState(generateAllNewDice());
  const [gameWon, setGameWon] = useState(false);
  const FocusRef = useRef();

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        frozen: false,
        id: nanoid()
      }));
  }

  function getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function rollDice() {
    setDice(prev =>
      prev.map(die => die.frozen ? die : { ...die, value: getRandomDiceNumber() })
    );
  }

  function toggleFreeze(id) {
    setDice(prev =>
      prev.map(die =>
        die.id === id ? { ...die, frozen: !die.frozen } : die
      )
    );
    console.log("freeze");
  }

  function newGame() {
    setDice(generateAllNewDice());
  }

  useEffect(() => {
    const allFrozen = dice.every(die => die.frozen);
    const allSameValue = dice.every(die => die.value === dice[0].value);

    if (allFrozen && allSameValue) {
      console.log("Game won!");
      setGameWon(true);
    } else {
      setGameWon(false);
    }
  }, [dice]);

  useEffect(() => {
    if (gameWon && FocusRef.current) {
      FocusRef.current.focus();
    }
  }, [gameWon]);

  return (
    <main>
      {gameWon && <Confetti />}

      <div aria-live="polite" className="sr-only">
        {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>

      <h2>Tenzies</h2>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its current
        value between rolls.
      </p>

      <div className="dice-container">
        {dice.map(dieObj => (
          <Dice
            key={dieObj.id}
            number={dieObj.value}
            isFrozen={dieObj.frozen}
            onClick={() => toggleFreeze(dieObj.id)}
          />
        ))}
      </div>

      {gameWon ? (
        <button
          className="roll-button"
          ref={FocusRef}
          onClick={newGame}
        >
          New Game
        </button>
      ) : (
        <button
          className="roll-button"
          onClick={rollDice}
        >
          Roll
        </button>
      )}
    </main>
  );
}

export default App;
