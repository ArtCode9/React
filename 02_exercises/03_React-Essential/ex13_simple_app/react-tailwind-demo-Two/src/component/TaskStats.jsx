export default function TaskStats({ total, completed }) {
  if (total === 0) return <p>No tasks yet.</p>;

  return (
    <p>
      {completed} completed out of {total}
    </p>
  );
}
