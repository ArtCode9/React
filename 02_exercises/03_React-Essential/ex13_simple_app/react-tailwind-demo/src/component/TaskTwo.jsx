import { useState } from "react";
import TaskList from './TaskList.jsx';
import TaskForm from './TaskForm.jsx';

export default function TaskTwo() {
   const [taskTs, setTaskTs] = useState([]);

   const addTaskTwo = (text) => {
      const trimmed = text.trim();
      if(!trimmed) return;
      
      const newTaskTwo = {
         id: crypto.randomUUID(), // unique id (browser)
         text: trimmed,
         completed: false,
      };

      setTaskTs((prev) => [...prev, newTaskTwo]);
   };

   const toggleTaskTwo = (id) => {
      setTaskTs((prev) => {
         prev.map((t) => 
            t.id === id ? { ...t, completed: !t.completed } : t
         )
      });
   }

   const deleteTask = (id) => {
      setTaskTs((prev) => prev.filter((t) => t.id !== id));
   }

   return (
      <div className="min-h-screen bg-green-500 text-white p-6 max-w-xl mx-auto">
         <h1 className="text-3xl font-bold mb-6 text-center">Second Task manager With more option</h1>

         {/* Lifted state up : App owns Tasks and passes handlers down */}
         <TaskForm onAdd={addTaskTwo}/>

         <TaskList 
            taskTs={taskTs}
            onToggle={toggleTaskTwo}
            onDelete={deleteTask}
         />
      </div>
   )
}