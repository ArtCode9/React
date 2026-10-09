function TaskCard({ task }) {   // task is prop and also is object
   return (
      <article> 
         <h2>{task.title}</h2>
         <p>{task.description}</p>
         <span>
            {task.completed ? 'Completed' : 'Not Completed'}
         </span>
      </article>
   ) 
}

export default TaskCard;