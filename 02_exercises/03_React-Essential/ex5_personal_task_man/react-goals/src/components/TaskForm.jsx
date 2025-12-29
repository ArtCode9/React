import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('todo');

  function submitHandler(event) {
    event.preventDefault();

    onAddTask({
      id: Math.random().toString(),
      title: title,
      status: status,
    });

    setTitle('');
    setStatus('todo');
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="todo">Todo</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>

      <button>Add Task</button>
    </form>
  );
}

export default TaskForm;
