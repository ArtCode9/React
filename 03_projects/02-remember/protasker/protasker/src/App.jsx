import Header from "./components/Header";
import TaskSummary from "./components/TaskSummary";
import TaskList from "./components/TaskList";
import tasks from "./data/tasks";

function App() {
  return (
    <main>
      <Header />
      <TaskSummary tasks={tasks}/>
      {/* first tasks is prop we want get from child component 
          second tasks is variable */}
      <TaskList items={tasks}/>  
             
    </main>
  );
}

export default App;