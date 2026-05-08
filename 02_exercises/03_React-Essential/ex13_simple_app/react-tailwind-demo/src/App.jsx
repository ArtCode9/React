import { useState } from 'react';
import Button from './component/Button.jsx';

function App() {
  

  const [count, setCount] = useState(0);
  // Count - > current state value 
  // setCount - > Function to update state
  // 0 - > initial value

  const counterBox = () =>  setCount(count + 1);

  return (
    <div className='h-200 bg-gray-900 text-white flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold'>Counter: {count}</h1>

      <button
        onClick={() => setCount(count + 1)}
        className='bg-blue-500 px-4 py-2 rounded mt-6'
      >
        Increase
      </button>
{/* This button come from Button component and reuseable but do the same as button above */}
      <Button onClick={counterBox} children='Increment Button'/>
      <Button onClick={counterBox} children='Increment Button'/>
      <Button onClick={counterBox} children='Increment Button'/>

      {/* Here we add condition on Jsx */}
      {count > 5 && (
          <p className='text-green-400 mt-3'>Wow! You did it five time</p>
       )
      }
      
    </div>
  );
}

export default App; 

