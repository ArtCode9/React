import { useState } from "react";

export default function Tiny () {
   const [tasks, setTasks] = useState([]);

   const add = () => {
      setTasks([...tasks, "Task" + (tasks.length + 1)]);
   };

   return (
      <div>
         <button onClick={add} className="bg-purple-950 px-4 text-white">
            Add
         </button>
         <pre>{JSON.stringify(tasks, null, 2)}</pre>
      </div>
   )

}


/* 
   ______________________________________________________________________________________
   1) You read tasks to display UI
   Example:
      {tasks.map(task => <div>{task}</div>)}

   React uses the current tasks to render the list.

   2) You call setTasks(...) to update it
   Example:
      setTasks([...tasks, "New task"]);

   This tells React: “update the tasks state to this new array”.

   3) After updating, React re-renders and tasks becomes the new value
   After you call:
         setTasks(["A", "B", "C"])
 
   React re-runs your component, and now:
      tasks is ["A", "B", "C"]

So tasks changes because you called setTasks.

Very short timeline (mental model)

   - Start: tasks = []
   - Click “Add”
   - Call: setTasks([...])
   - React updates state
   - Now: tasks = updated array
   - I re-renders using new tasks
   
*/