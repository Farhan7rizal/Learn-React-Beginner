import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare(); //we're executing this function, but the function real executeddefine in the app component, is handleSelectSquare()
  // }

  /*updatedBoard which is a new array where we can use the spread operator to paste in all the existing elements of the old array.So now this is technically a new array object in memory that contains the old array elements as child elements.Now since here I'm dealing with some nest arrays,those should be copied as well before we update anything.And we can achieve this here by calling the map method on our old state, so on our old array here. So that here we got our innerArrays, and for every innerArray we also return a new nested array which spreads the elements of that innerArray inside of it. So that technically here we got a brand new array full of brand new nested arrays which still store the data they did store before, but now it's this updated board that should be updated here

  
  */
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={onSelectSquare}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
