import { useState, useRef } from 'react'

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('Todo')

  const inputRef = useRef(null); // Ref here guys
/*  👆👆👆👆👆👆👆👆👆👆
Creates a mutable box - .current will point to the DOM node -Does NOT cause re-render
*/

  function handleSubmit(e) {
    e.preventDefault()

    if(!title.trim()) return

    onAddTask(title, status)
    
    setTitle('')
    setStatus('Todo')

    inputRef.current.focus() // use ref here
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className='mb-6 p-4 bg-gray-800 rounded-2x1 shadow-md space-y-3'
      >

      <input
        ref={inputRef}
        type="text"
        placeholder="New task..."
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="
          w-full px-4 py-2 rounded-lg
          bg-gary-700 text-black
          placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-cyan-400
        "
      />

      <div className='flex gap-2'>
          <select
              value={status}
              onChange={e => setStatus(e.target.value)}
              className="
                flex-1 px-3 py-2 rounded-lg
                bg-gray-700 text-white
                focus:outline-none focus:ring-2 focus:ring-cyan-400
              "
          >
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
      </select>
      </div>
      

      <button 
        type='submit'
        className='
          px-5 py-2 rounded-lg font-medium
          bg-cyan-500 text-grey-900
          hover;bg-cyan-400
          active:scale-95
          transition
        '
        >
        Add
      </button>
    </form>
  )
}

export default TaskForm


/* 
   input value comes from state
   Every keystroke updates state
   state -> UI -> State loop
*/

/*         ref={inputRef}
React connects the <input> DOM element
Stores it in inputRef.current

        inputRef.current.focus()
Imperative DOM command
Allowed ONLY via refs
Clean & safe
*/