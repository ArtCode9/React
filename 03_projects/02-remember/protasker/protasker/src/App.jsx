import Header from "./components/Header";
import TaskCard from "./components/TaskCard.jsx";
import tasks from "./data/tasks";

function App() {
  return (
    <main>
      <Header />

      <section> 
        <h2>My Tasks</h2>

        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}/>
        ))}
      </section> 
    </main>
  );
}

export default App;