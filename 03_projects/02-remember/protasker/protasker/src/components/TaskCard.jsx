function TaskCard({ task }) {   // task is prop and also is object
   return (
      <article> 
         <h3>{task.title}</h3>

         <p>{task.description}</p>

         <p>
            Status:{' '}
            <strong>
               {task.completed ? 'Completed' : 'In Progress'}
            </strong>
         </p>
      </article>
   ) 
}

export default TaskCard;