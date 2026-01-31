function TaskItem({ title, status, onDelete}) {
   return (
      <li>
         {title} - <small>{status}</small>
         <button onClick={onDelete}>X</button>
      </li>
   );
}

export default TaskItem;

/*  Step 1: 
   Key Concept Here:
      - Props are function parameters
      - Component = pure function 
      - No logic, no state -> just ui
*/