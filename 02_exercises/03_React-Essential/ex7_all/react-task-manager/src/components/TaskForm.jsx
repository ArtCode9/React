import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (title.trim() === '') return

    onAddTask(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
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