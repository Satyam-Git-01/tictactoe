import React, { useEffect, useState } from "react";
import Block from "./Block";

const Board = () => {
  const intialMarks = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [marks, setMarks] = useState(intialMarks);
  const [player, setPlayer] = useState(1);
  const changeMark = (i) => {
    const m = [...marks];
    if (m[i] === 0) {
      m[i] = player;
      setMarks(m);
      setPlayer(player === 1 ? 2 : 1);
    } else {
      alert("Click On Empty Block");
    }
  };
  useEffect(() => {
    const winCombinations = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];
    for (let x of winCombinations) {
      if (marks[x[0]] == 1 && marks[x[1]] == 1 && marks[x[2]] == 1) {
        console.log("Player1 Wins");
        setMarks(intialMarks);
      }
      if (marks[x[0]] == 2 && marks[x[1]] == 2 && marks[x[2]] == 2) {
        console.log("Player2 Wins");
        setMarks(intialMarks);
      }
    }
  }, [marks]);
  return (
    <>
      <div className="board">
        <div>
          <Block mark={marks[0]} changeMark={changeMark} position={0}></Block>
          <Block mark={marks[1]} changeMark={changeMark} position={1}></Block>
          <Block mark={marks[2]} changeMark={changeMark} position={2}></Block>
        </div>
        <div>
          <Block mark={marks[3]} changeMark={changeMark} position={3}></Block>
          <Block mark={marks[4]} changeMark={changeMark} position={4}></Block>
          <Block mark={marks[5]} changeMark={changeMark} position={5}></Block>
        </div>
        <div>
          <Block mark={marks[6]} changeMark={changeMark} position={6}></Block>
          <Block mark={marks[7]} changeMark={changeMark} position={7}></Block>
          <Block mark={marks[8]} changeMark={changeMark} position={8}></Block>
        </div>
      </div>
    </>
  );
};

export default Board;
