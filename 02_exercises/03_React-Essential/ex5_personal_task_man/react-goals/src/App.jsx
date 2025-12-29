import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  function addTask(task) {
    setTasks((prevTasks) => [...prevTasks, task]);
  }

  function changeFilter(status) {
    setFilter(status);
  }

  const filteredTasks =
    filter === 'all'
      ? tasks
      : tasks.filter(task => task.status === filter);

  return (
    <div>
      <h1>Task Manager</h1>

      <TaskForm onAddTask={addTask} />

      <div>
        <button onClick={() => changeFilter('all')}>All</button>
        <button onClick={() => changeFilter('todo')}>Todo</button>
        <button onClick={() => changeFilter('doing')}>Doing</button>
        <button onClick={() => changeFilter('done')}>Done</button>
      </div>

      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
