export default function TaskList({ taskTs = [], onToggle, onDelete }) {
  if (taskTs.length === 0) {
    return <p className="text-gray-400">No tasks yet</p>;
  }

  return (
    <div className="space-y-2">
      {taskTs.map((task) => (
        <div
          key={task.id} // ✅ better than index
          className="flex items-center justify-between bg-gray-800 p-3 rounded"
        >
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />
            <span
              className={
                task.completed
                  ? "line-through text-gray-400"
                  : ""
              }
            >
              {task.text}
            </span>
          </label>

          <button
            onClick={() => onDelete(task.id)}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
