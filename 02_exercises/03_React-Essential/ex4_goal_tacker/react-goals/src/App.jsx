// useState created 
import { useState } from 'react';
import GoalItem from './components/GoalItem';

function App() {
  // goals -> current data 
  // setGoals -> function to update it
  const [goals, setGoals] = useState([]);
  /* 
    React remembers this value between renders
    When setGoals is called → React re-renders
    This is React’s engine.
  */
  const [enteredGoal, setEnteredGoal] = useState('');

  function addGoal() {
    setGoals((prevGoals) => {
      return [...prevGoals, enteredGoal];
    });
    setEnteredGoal('');
  }

  return (
    <main>
      <h1>My Goals</h1>

      <input
        type='text'
        value={enteredGoal}
        onChange={(event) => setEnteredGoal(event.target.value)}
      ></input>
      <button onClick={addGoal}>Add Goals</button>
      <ul>
        {goals.map((goal, index) => (
          <GoalItem key={index} text={goal} />
        ))}
      </ul>
    </main>
  );
}

export default App;