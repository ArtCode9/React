import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('Todo')

  function handleSubmit(e) {
    e.preventDefault()

    if(!title.trim()) return

    onAddTask(title, status)
    
    setTitle('')
    setStatus('Todo')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
      </select>

      <button>Add</button>
    </form>
  )
}

export default TaskForm


/* 
   input value comes from state
   Every keystroke updates state
   state -> UI -> State loop
*/