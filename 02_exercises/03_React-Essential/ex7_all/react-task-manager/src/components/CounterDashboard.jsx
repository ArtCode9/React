import { useState, useRef } from 'react'
import Square from './Square.jsx'

function CounterDashboard() {
  let messageFromCounter = 'Hello My name is props'
  const [counters, setCounters] = useState([
    { id: 1, label: 'Apples', value: 2 },
    { id: 2, label: 'Bananas', value: 5 },
  ])
  const [label, setLabel] = useState('')
  const inputRef = useRef(null)

  const total = counters.reduce((sum, c) => sum + c.value, 0) // 🧮 Derived Data

  function addCounter(e) {
    e.preventDefault()
    if (!label.trim()) return
    setCounters(prev => [...prev, { id: Date.now(), label, value: 0 }])
    setLabel('')
    inputRef.current.focus()
  }

  function increment(id) {
    setCounters(prev =>
      prev.map(c => (c.id === id ? { ...c, value: c.value + 1 } : c))
    )
  }

  function resetAll() {
    setCounters(prev => prev.map(c => ({ ...c, value: 0 })))
  }

  function handleSquareClick(message) {
    console.warn('Message from Square: ', message)
  }

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mt-10 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center text-cyan-400">
        Counter Dashboard
      </h2>

      {/* Add Counter Form */}
      <form onSubmit={addCounter} className="flex gap-2 mb-4">
        <input
          ref={inputRef}
          type="text"
          value={label}
          onChange={e => setLabel(e.target.value)}
          placeholder="New counter..."
          className="flex-1 p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg">
          Add
        </button>
      </form>

      {/* Counters List */}
      <ul className="space-y-2">
        {counters.map(counter => (
          <li
            key={counter.id}
            className="flex justify-between bg-gray-700 p-3 rounded-lg"
          >
            <span>{counter.label}</span>
            <div className="flex items-center gap-2">
              <span className="text-cyan-300">{counter.value}</span>
              <button
                onClick={() => increment(counter.id)}
                className="px-2 py-1 bg-cyan-600 hover:bg-cyan-700 rounded text-sm"
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Footer Summary */}
      <div className="flex justify-between mt-4 border-t border-gray-600 pt-3">
        <span>Total Items: {counters.length}</span>
        <span className="text-cyan-400 font-bold">Total: {total}</span>
      </div>

      <button
        onClick={resetAll}
        className="mt-4 w-full py-2 bg-red-500 hover:bg-red-600 rounded-lg"
      >
        Reset All
      </button>
      <Square 
        message={messageFromCounter}
        onSquareAction={handleSquareClick}
        setCounters={setCounters}
        />
    </div>
  )
}

export default CounterDashboard

/* 
          setCounters={setCounters}
With about tag
Now the child square has direct access to parent state setter
*/

/* 
STATE
  counters
  label

DERIVED
  total

ACTIONS
  addCounter
  increment
  resetAll

COMMUNICATION
  props down
  callbacks up

*/