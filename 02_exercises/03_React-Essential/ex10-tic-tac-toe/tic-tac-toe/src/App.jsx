import { useState } from "react";
import Board from "./components/Board";
import Status from "./components/Status";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) return;

    const nextSquares = [...squares];
    nextSquares[index] = isXNext ? "X" : "O";

    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  const winner = calculateWinner(squares);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-6">Tic Tac Toe</h1>

      <Status winner={winner} isXNext={isXNext} />

      <Board squares={squares} onSquareClick={handleClick} />

      <button
        onClick={resetGame}
        className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-600 rounded"
      >
        Reset
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default App;
