import { useState } from "react";

function Task () {
   const [tasks, setTasks] = useState([]);
   /* 
      tasks = the current value of your state (what the UI reads)
      setTasks = the function that changes that value (what the UI listens to)
   */
   const [input, setInput] = useState("");

   const addTask = () => {
      if(input.trim() === "") return;
      setTasks([...tasks, input]);
      setInput("");
   }
 
   return (
     <div className="min-h-screen bg-purple-500 text-black p-6">
      <h1 className="text-6xl mb-3 font-bold">Task List</h1>

         <div className="flex gap-2 mb-4">
            <input 
               value={input}
               onChange={(e) => setInput(e.target.value)}
               className="text-black px-2"
               placeholder="New Task..."
            />
            <button
               onClick={addTask}
               className="bg-purple-950 px-4 text-black"
            >
               Add
            </button>
         </div>

         {tasks.length === 0 && (
            <p className="text-grey-400">No tasks yet</p>
         )}

         {tasks.map((task, index) => (
            <div key={index} className="bg-gray-500 p-3 mb-2 rounded">
               {task}
            </div>
         ))}
     </div>
   );
}

export default Task;


/* 
      const [tasks, setTasks] = useState([]);

   When you write it:
   React does two things for you:
      1. It creates a piece of state (here: tasks)
      2. It gives you a function to update it (here: setTasks)
   [] is the initial value of that state.
   So initially
   - tasks is an empty array: []

   Why do we have [...] on the left?
   The syntax:

      const [tasks, setTasks] = ...

   means array destructuring in JavaScript.
   So useState(...) returns an array of two values:
   [tasks, setTasks]
  
   Meaning:
      first item → the current state value (tasks)
      second item → the updater function (setTasks)

   You can think of it like this (conceptually):
   
   const stateArray = useState([]);
   const tasks = stateArray[0];
   const setTasks = stateArray[1];
   ____________________________________
   What does tasks actually “do”?
   tasks is just a normal variable that React updates for you.
   When state changes, React re-renders your component, and tasks becomes the new value.

   setTasks(["Learn React"]);

   After this, React will re-render and now:
   -  tasks equals ["Learn React"]
   ____________________________________
   What does setTasks actually “do”?
   setTasks is a function React provides. You call it to update state.

   const addTask = () => {
    setTasks([...tasks, "New task"]);
   };

   for better understand i create a component with name : Tiny


*/