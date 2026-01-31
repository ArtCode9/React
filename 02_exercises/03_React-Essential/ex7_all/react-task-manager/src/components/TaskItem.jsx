function TaskItem({ title, status, onDelete}) {
   const statusStyles = {
      Todo: 'bg-yellow-500/20 text-yellow-400',
      Doing: 'bg-blue-500/20 text-blue-400',
      Done: 'bg-green-500/20 text-green-400',
   }


   return (
      <li 
         className="
               flex items-center justify-between
               bg-gray-800 p-4 rounded-xl
               shadow-sm
         "
      >
        <div className="flex flex-col gap-1">
        <span className="text-white font-medium">
          {title}
        </span>

        <span
          className={`
            text-xs font-semibold px-2 py-1 rounded-full w-fit
            ${statusStyles[status]}
          `}
        >
          {status}
        </span>
      </div>

      <button
        onClick={onDelete}
        className="
          text-red-400 hover:text-red-300
          transition
        "
        title="Delete task"
      >
        ✕
      </button>
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