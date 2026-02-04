import { useEffect, useState} from 'react';
import TimerDisplay from '../components/TimerDisplay.jsx';
import CountDisplay from '../components/CountDisplay.jsx';
import Controls from '../components/Controls.jsx';


function CounterGame() {
   const [count, setCount] = useState(0);
   const [timer, setTimer] = useState(0);

   useEffect(() => {
      if(timer === 0)  return;
      
      const interval = setInterval(() => {
         setTimer(prev => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
   }, [timer]);

   function startGame() {
      setTimer(10);
      setCount(0);
   }

   function increment() {
      setCount(prev => prev + 1);
   }

   function reset() {
      setCount(0);
      setTimer(0);
   }

   return (
      <div className='home-container'>
         <TimerDisplay timer={timer}/>
         <CountDisplay count={count}/>
         <Controls 
            timer={timer}
            onStart={startGame}
            onClick={increment}
            onReset={reset}
         />
      </div>
   );
}

export default CounterGame;

