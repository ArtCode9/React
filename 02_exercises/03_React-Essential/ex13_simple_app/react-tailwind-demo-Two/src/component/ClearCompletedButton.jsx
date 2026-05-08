export default function ClearCompletedButton({ onClear, disabled }) {
  return (
    <button onClick={onClear} disabled={disabled}>
      Clear completed
    </button>
  );
}
