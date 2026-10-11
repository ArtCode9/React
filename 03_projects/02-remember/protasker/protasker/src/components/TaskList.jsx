import TaskCard from "./TaskCard.jsx";

function TaskList({ items }) {  /* This {} her is  doing Object Destructuring in JS also we can use this like example above */
   return(
      <section>
         <h2>My Tasks</h2>

         {items.map((task) => (
            <TaskCard key={task.id} task={task}/>
         ))}
      </section>
   ) 
}

export default TaskList;


/* 
   this code is good for big components in more complex

function TaskList(props) {
   return <p>{props.tasks.length} tasks</p>
}

*/