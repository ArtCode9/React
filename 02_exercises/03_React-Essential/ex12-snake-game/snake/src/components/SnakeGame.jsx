import { useState, useEffect, useRef } from "react"
import Board from "./Board"

const GRID_SIZE = 20
const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 },
]

function getRandomFood() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE),
  }
}

function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE)
  const [food, setFood] = useState(getRandomFood())
  const [direction, setDirection] = useState("RIGHT")
  const [isRunning, setIsRunning] = useState(true)

  const directionRef = useRef(direction)
  directionRef.current = direction

  // Keyboard control
  useEffect(() => {
    function handleKey(e) {
      const keyMap = {
        ArrowUp: "UP",
        ArrowDown: "DOWN",
        ArrowLeft: "LEFT",
        ArrowRight: "RIGHT",
      }

      const newDirection = keyMap[e.key]
      if (!newDirection) return

      setDirection(prev => {
        // Prevent reverse direction
        if (
          (prev === "UP" && newDirection === "DOWN") ||
          (prev === "DOWN" && newDirection === "UP") ||
          (prev === "LEFT" && newDirection === "RIGHT") ||
          (prev === "RIGHT" && newDirection === "LEFT")
        ) {
          return prev
        }
        return newDirection
      })
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  // Game Loop
  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setSnake(prevSnake => {
        const head = prevSnake[0]
        const newHead = { ...head }

        switch (directionRef.current) {
          case "UP":
            newHead.y -= 1
            break
          case "DOWN":
            newHead.y += 1
            break
          case "LEFT":
            newHead.x -= 1
            break
          case "RIGHT":
            newHead.x += 1
            break
        }

        // Wall collision
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setIsRunning(false)
          return prevSnake
        }

        // Self collision
        if (prevSnake.some(seg => seg.x === newHead.x && seg.y === newHead.y)) {
          setIsRunning(false)
          return prevSnake
        }

        const newSnake = [newHead, ...prevSnake]

        // Food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setFood(getRandomFood())
        } else {
          newSnake.pop()
        }

        return newSnake
      })
    }, 150)

    return () => clearInterval(interval)
  }, [isRunning, food])

  function resetGame() {
    setSnake(INITIAL_SNAKE)
    setFood(getRandomFood())
    setDirection("RIGHT")
    setIsRunning(true)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold text-cyan-400">Snake Game</h1>

      <Board snake={snake} food={food} gridSize={GRID_SIZE} />

      {!isRunning && (
        <button
          onClick={resetGame}
          className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-xl transition"
        >
          Restart
        </button>
      )}
    </div>
  )
}

export default SnakeGame
