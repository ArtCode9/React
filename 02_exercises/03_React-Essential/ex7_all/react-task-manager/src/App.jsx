import { useState } from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import CounterDashboard from './components/CounterDashboard'
import TaskPriorityManager from './components/TaskPriorityManager'


function App() {
  
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React Basic', status: 'Todo', priority: 'Medium'},
    { id: 2, title: 'Practice Component', status: 'Doing', priority: 'Medium'},
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

  function updateTaskPriority(taskId, newPriority) {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, priority: newPriority} : task
    ))
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-cyan-400 text-center mb-6">
        React Task Manager</h1>
      <div className="mb-6 flex justify-center">
      <select value={filter} onChange={e => setFilter(e.target.value)} className="
            px-4 py-2 rounded-lg
            bg-gray-700 text-white
            focus:outline-none focus:ring-2 focus:ring-cyan-400
            shadow-md
      ">
        <option value="All">All</option>
        <option value="Todo">Todo</option>
        <option value="Doing">Doing</option>
        <option value="Done">Done</option>
      </select>
      </div>
      <TaskForm onAddTask={addTask}/>
      <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} />

      <CounterDashboard /> {/* 🧩 new feature */}

      <TaskPriorityManager 
        tasks={tasks}
        onUpdatePriority={updateTaskPriority}
      />
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