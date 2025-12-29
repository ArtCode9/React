import TaskItem from './TaskItem';

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          title={task.title}
          status={task.status}
        />
      ))}
    </ul>
  );
}

export default TaskList;
