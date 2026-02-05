import Square from "./Square";

function Board({ squares, onSquareClick }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;
