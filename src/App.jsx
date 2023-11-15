import { useEffect, useState } from "react";
import Cell from "./components/Cell";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [firstGo, setFirstGo] = useState("circle");
  const [winner, setWinner] = useState(null);

  //prolazak kroz niz da nema dobitne kombinacije.
  let checkArray = cells.every((cell) => cell !== "");

  useEffect(() => {
    checkWinner();
  }, [cells]);

  const checkWinner = () => {
    const winnerCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    winnerCombination.forEach((comb) => {
      //comb je jedna kombinacija(jedan niz na primer [0,1,2] ili [3,4,5] itd)
      let crossWiner = comb.every((cell) => cells[cell] === "cross");
      let circleWiner = comb.every((cell) => cells[cell] === "circle");

      if (crossWiner) {
        setWinner("Winner is cross");
        return;
      } else if (circleWiner) {
        setWinner("Winner is cercle");
        return;
      } else if (checkArray) {
        setWinner("We dont have a winner");
      }
    });
  };

  const handleResetGame = () => {
    if (winner || checkArray) {
      let emptyArray = new Array(9).fill("");
      setCells(emptyArray);
      setWinner(null);
    }
  };

  return (
    <div className="app">
      <h1 className="title">X-0 Game</h1>
      <div className="squareContainer">
        {cells.map((cell, index) => {
          return (
            <Cell
              key={index}
              id={index}
              cell={cell}
              cells={cells}
              setCells={setCells}
              firstGo={firstGo}
              setFirstGo={setFirstGo}
              winner={winner}
            />
          );
        })}
      </div>

      {winner && <h2>{winner}</h2>}
      <button onClick={handleResetGame}>Reset Game</button>
    </div>
  );
}

export default App;
