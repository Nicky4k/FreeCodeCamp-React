import React, { useState } from "react";

const Tenzies = () => {
  const [score, setScore] = useState([
    { id: 1, isFreeze: false, diceValue: 0 },
    { id: 2, isFreeze: false, diceValue: 0 },
    { id: 3, isFreeze: false, diceValue: 0 },
    { id: 4, isFreeze: false, diceValue: 0 },
    { id: 5, isFreeze: false, diceValue: 0 },
    { id: 6, isFreeze: false, diceValue: 0 },
    { id: 7, isFreeze: false, diceValue: 0 },
    { id: 8, isFreeze: false, diceValue: 0 },
    { id: 9, isFreeze: false, diceValue: 0 },
    { id: 10, isFreeze: false, diceValue: 0 },
  ]);

  function generateRand() {
    return (Math.floor(Math.random() * 10) % 6) + 1;
  }

  function tenzieRollHandler() {
    const newScores = score.map((dice) => {
      return {
        ...dice,
        diceValue: dice.isFreeze ? dice.diceValue : generateRand(),
      };
    });
    setScore(newScores);
  }

  function diceFreezeHandler(e) {
    if (e.target.classList[1] === "tenzie__dice") {
      e.target.classList.add("selected");
      score[e.target.classList[0] - 1].isFreeze = true;
    }
  }

  return (
    <div className="tenzies__container">
      <section className="section__main">
        <h2>Tenzies</h2>
        <p className="tenzies__subText">
          Roll until all dice are the same. Click each dice to freeze at al its
          current value between rolls.
        </p>
        <figure onClick={diceFreezeHandler} className="tenzie__dices">
          {new Array(10).fill("a").map((el, i) => (
            <div key={i} className={i + 1 + " tenzie__dice"}>
              {score[i].diceValue}
            </div>
          ))}
        </figure>
        <button onClick={tenzieRollHandler} className="tenzies__rollBtn">
          Roll
        </button>
      </section>
    </div>
  );
};

export default Tenzies;
