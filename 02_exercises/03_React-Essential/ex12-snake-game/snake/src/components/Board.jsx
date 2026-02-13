function Board({ snake, food, gridSize }) {
  const cells = []

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const isSnake = snake.some(seg => seg.x === x && seg.y === y)
      const isFood = food.x === x && food.y === y

      cells.push(
        <div
          key={`${x}-${y}`}
          className={`
            w-4 h-4
            ${isSnake ? "bg-green-400" : ""}
            ${isFood ? "bg-red-400" : "bg-gray-700"}
            border border-gray-800
          `}
        />
      )
    }
  }

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, 1rem)`,
      }}
    >
      {cells}
    </div>
  )
}

export default Board
