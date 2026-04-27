import { useRef } from "react"
import Square from "./Square.jsx"
import Yellow  from "./Yellow.jsx"

function TaskPriorityManager({ tasks, onUpdatePriority }) {
  const firstSelectRef = useRef(null)

  function handlePriorityChange(taskId, e) {
    const newPriority = e.target.value
    onUpdatePriority(taskId, newPriority)
  }

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-md mt-8 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-cyan-400 text-center">
        Task Priorities
      </h2>

      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center italic">No tasks yet</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task, idx) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-700 p-3 rounded-xl shadow-sm"
            >
              <span className="text-white font-medium">{task.title}</span>

              <select
                ref={idx === 0 ? firstSelectRef : null} // focus first one
                value={task.priority || "Medium"}
                onChange={e => handlePriorityChange(task.id, e)}
                className="
                  px-3 py-1 rounded-lg
                  bg-gray-600 text-white
                  focus:outline-none focus:ring-2 focus:ring-cyan-400
                  shadow-sm
                "
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </li>
          ))}
        </ul>
      )}
      <Square/>
      <Yellow />
    </div>
  )
}

export default TaskPriorityManager
