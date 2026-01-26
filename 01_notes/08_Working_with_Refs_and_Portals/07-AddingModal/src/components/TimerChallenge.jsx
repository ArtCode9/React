import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

 export default function TimerChallenge({ title, targetTime }) {
   
   const timer = useRef();

   const [timerStarted, setTimerStarted] = useState(false);
   const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {

         timer.current =  setTimeout(() => {
            setTimerExpired(true);
         }, targetTime * 1000);

         setTimerStarted(true);
    }

    function handleStop() {
      // how we can access setTimeout function inside the handleStart function that is where ref can help us
      // with js we can use this to stop timer :: clearTimeout(); with useRef > timer.current
      clearTimeout(timer.current);
    }


   return (
   <>
      {timerExpired && <ResultModal targetTime={targetTime} result="Lost" />}
      <section className="challenge">
         <h2>{ title }</h2>
         
         <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
         </p>
         <p>
            <button onClick={timerStarted ? handleStop : handleStart}>
               {timerStarted ? 'Stop' : 'Start'} Challenge
            </button>
         </p>
         <p className={timerStarted ? 'active' : undefined}>
         {timerStarted ? 'Time is running...' : 'Timer inactive'}
         </p>
      </section>
   </>
   );
 }