import { useState } from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import CounterDashboard from './components/CounterDashboard'


function App() {
  
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React Basic', status: 'Todo'},
    { id: 2, title: 'Practice Component', status: 'Doing'},
  ])

  const [filter, setFilter] = useState('All')

  const filteredTasks = filter === 'All' 
        ? tasks 
        : tasks.filter(task => task.status === filter)

  function addTask(title, status) {
    const newTask = {
      id: Date.now(),
      title,
      status,
    }

    setTasks(prev => [...prev, newTask])
  }

  function deleteTask(id){
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-cyan-400 text-center mb-6">
        React Task Manager</h1>
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Todo">Todo</option>
        <option value="Doing">Doing</option>
        <option value="Done">Done</option>
      </select>
      <TaskForm onAddTask={addTask}/>
      <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} />

      <CounterDashboard /> {/* 🧩 new feature */}

      
    </div>
  )
}

export default App;


/* 
  TaskForm will add tasks
  TaskList will display tasks

  therefore , state must live in App.jsx 👍

  tasks state is now global (App-level)
  addTask is passed down as a function
  children never modify state directly

*/