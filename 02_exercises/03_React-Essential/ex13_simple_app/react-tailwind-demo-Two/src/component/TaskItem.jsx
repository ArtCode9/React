export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggle}
      />

      <span
        style={{
          flex: 1,
          textDecoration: task.completed ? "line-through" : "none",
          opacity: task.completed ? 0.6 : 1,
        }}
      >
        {task.text}
      </span>

      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
