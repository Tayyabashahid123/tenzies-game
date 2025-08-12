import { useState } from 'react';
import './App.css';
import Dice from'./Dice.js';
import { nanoid } from "nanoid"

function App() {

  const [dice, setDice] = useState(generateAllNewDice())
  function generateAllNewDice() {
    return new Array(10) // 1️⃣ create an empty array with 10 slots
      .fill(0)           // 2️⃣ fill it with zeroes so it can be iterated over
      .map(() => ({      // 3️⃣ map over each slot and return an object
        value: Math.ceil(Math.random() * 6), // 4️⃣ random number 1–6
        frozen: false,                       // 5️⃣ default "not held"
        id: nanoid()                          // 6️⃣ unique ID for React key
      }));
  }


  function getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function rollDice(){
    setDice(prev => 
      prev.map(die => die.frozen ? die : {...die, value: getRandomDiceNumber()})
    )
  }

  function toggleFreeze(id) {
    setDice(prev =>
      prev.map(die => (die.id === id ? {...die, frozen : !die.frozen}: die))
    );
    console.log("freeze")
  }



  
  return (
      <main>
        <h2>Tenzies</h2>
        <p> Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
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

        < button className="roll-button" onClick={rollDice}>Roll</button>  
        </main>
  );
}

export default App;
