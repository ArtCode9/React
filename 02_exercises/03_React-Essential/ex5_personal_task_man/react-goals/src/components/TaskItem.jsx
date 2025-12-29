function TaskItem({ title, status }) {
  return (
    <li>
      <strong>{title}</strong> — <em>{status}</em>
    </li>
  );
}

export default TaskItem;
