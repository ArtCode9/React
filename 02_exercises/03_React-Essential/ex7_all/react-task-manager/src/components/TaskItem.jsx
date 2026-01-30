function TaskItem({ title, status}) {
   return (
      <li>
         {title} - <small>{status}</small>
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