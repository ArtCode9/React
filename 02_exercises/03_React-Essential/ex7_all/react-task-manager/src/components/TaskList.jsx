
import Square from './Square.jsx'
import Yellow from './Yellow.jsx'
import TaskItem from './TaskItem'

function TaskList({ tasks, onDeleteTask }) {
  if (!Array.isArray(tasks)) {
    return <p className="text-red-400 text-sm text-center">Invalid tasks data</p>
  }

  if(tasks.length === 0) return <p className="text-gray-400 text-center italic">No Tasks yet.</p>

  return (
    <ul className="space-y-3">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          title={task.title}
          status={task.status}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
      <div>
        <Square/>
        <Yellow />
      </div>
    </ul>
  )
}

export default TaskList




// import { useState } from "react";
// import TaskItem from "./TaskItem.jsx";


// function TaskList({ tasks }) {
   // const tasks = [
   //    { id: 1, title: 'learn react basic', status: 'Todo'},
   //    { id: 2, title: 'Practice components', status: 'Doing'},
   //    { id: 3, title: 'Build small project', status: 'Done'},
   // ]

   // tasks is now state
   // const [tasks, setTasks] = useState([
   //       { id: 1, title: 'learn react basic', status: 'Todo'},
   //       { id: 2, title: 'Practice Components', status: 'Doing'},
   //       { id: 3, title: 'Build small project', status: 'Done'},
   //       { id: 4, title: 'Art coding nine', status: 'Cool'},
   // ]);


   // no state anymore from here because state move to app.jsx
   // if(tasks.length === 0) {
   //    return <p>No tasks yet.</p>
   // }

   // {/* <button onClick={() => setTasks([])}>Clear Tasks</button> */}
//    return (
   
//       <ul>
//          {tasks.map(task => (
//             <TaskItem 
//                key={task.id}
//                title={task.title}
//                status={task.status}
//             />
//          ))}   
//       </ul>
   
//    )
// }


// export default TaskList

/* step 1:
   Key Concept here:
      - map() to render list 
      - key is mandatory (React reconciliation)
      - Parent passes data -> child renders it
   step 2:
      - tasks become state with const [tasks, setTasks]
      - setTasks will later control update
      - UI will re-render automatically when state changes
*/

/* 
   🧠 What ```useState``` Actually Does
    🪙 const [state, setState] = useState(initialValue) 🪙

      - state -> current data
      - setState -> tell react "re-render with new data"
      - React compares old vs new UI (Virtual DOM)
*/

/* 
  <button onClick={() => setTasks([])}>Clear Tasks</button>
   Click this and list is gone 
   this proves state works
*/