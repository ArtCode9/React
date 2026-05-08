import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="flex-1 text-black px-3 py-2 rounded"
        placeholder="New task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}
