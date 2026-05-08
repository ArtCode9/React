import { useEffect, useState } from "react";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList.jsx";
import TaskStats from "./component/TaskStats.jsx";
import ClearCompletedButton from "./ClearCompletedButton";

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Load from localStorage once
  useEffect(() => {
    try {
      const raw = localStorage.getItem("tasks");
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) setTasks(parsed);
    } catch (e) {
      console.error("Failed to load tasks:", e);
    }
  }, []);

  // Save whenever tasks changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newTask = {
      id: crypto.randomUUID(), // stable unique id
      text: trimmed,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]); // immutability
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((t) => !t.completed));
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 16 }}>
      <h1>Task Manager</h1>

      <TaskForm onAdd={addTask} />

      <TaskStats total={tasks.length} completed={completedCount} />

      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />

      <ClearCompletedButton
        onClear={clearCompleted}
        disabled={tasks.every((t) => !t.completed)}
      />
    </div>
  );
}
