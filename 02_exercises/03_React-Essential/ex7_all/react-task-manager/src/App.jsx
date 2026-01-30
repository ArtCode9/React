import { useState } from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";

function App() {

  const [tasks, setTasks] = useState(
    { id: 1, title: 'Learn React Basic', status: 'Todo'},
    { id: 2, title: 'Practice Component', status: 'Doing'},
  )

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title,
      status: 'Todo',
    }

    setTasks(prevTask => [...prevTask, newTask])
  }

  return (
    <div>
      <h1>React Task Manager</h1>
      <TaskForm onAddTask={addTask}/>
      <TaskList tasks={tasks}/>
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