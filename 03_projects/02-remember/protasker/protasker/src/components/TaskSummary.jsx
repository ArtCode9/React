function TaskSummary ({ tasks }) {
   const totalTasks = tasks.length;  // this length return all array member

   // this will return completed member task from array
   // and filter create new array and put all completed task in it
   const completedTasks = tasks.filter((task) => {
      return task.completed;
   }).length;

   return (
      <section>
         <h2>Task Summary</h2>

         <p>Total tasks: {totalTasks}</p>
         <p>Completed tasks: {completedTasks}</p>
      </section>
   )
}

export default TaskSummary;