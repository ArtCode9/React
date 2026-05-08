import TaskItem from "../component/TaskItem.jsx";

export default function TaskList({ tasks = [], onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p style={{ opacity: 0.7 }}>Nothing to show.</p>;
  }

  return (
    <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id} // ✅ unique stable key
          task={task}
          onToggle={() => onToggle(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </div>
  );
}
