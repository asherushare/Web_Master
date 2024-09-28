import React, { useState } from 'react'

function LudoBoard() {
    let [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});

    let [count, setCount] = useState(0);

    let updateBlue = () => {
        console.log(`moves: ${moves.blue}`);
        setMoves((prevMoves) => {
            return {...moves, blue: moves.blue + 1}
        });
    }

    let updateYellow = () => {
      console.log(`moves: ${moves.yellow}`);
      setMoves((prevMoves) => {
        return { ...moves, yellow: moves.yellow + 1 };
      });
    };

  return (
    <div>
      <p>Games begins!</p>
      <div className="board">
        <p>Blue moves = {moves.blue} </p>
        <button style={{background: "blue"}} onClick={updateBlue}>+1</button>
        <p>Yellow moves = {moves.yellow} </p>
        <button style={{background: "yellow", color: "black"}} onClick={updateYellow}>+1</button>
        <p>Green moves = {moves.green} </p>
        <button style={{background: "green"}}>+1</button>
        <p>Red moves = {moves.red} </p>
        <button style={{background: "red"}}>+1</button>
      </div>
    </div>
  );
}

export default LudoBoard
