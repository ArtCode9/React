import { useState, useRef, useEffect } from "react";
import TimeDisplay from "./TimeDisplay.jsx";

function Stopwatch () {
   const [time, setTime] = useState(0);
   const [isRunning, setIsRunning] = useState(false);

   const intervalRef = useRef(null);
   const startTimeRef = useRef(0);

   useEffect(() => {
      if(isRunning) {
         startTimeRef.current = Date.now() - time

         intervalRef.current = setInterval(() => {
            setTime(Date.now() - startTimeRef.current)
         }, 10)
      } else {
         clearInterval(intervalRef.current)
      }

      return () => clearInterval(intervalRef.current)
   }, [isRunning])

   function handleStart() {
      setIsRunning(true)
   }

   function handlePause() {
      setIsRunning(false)
   }

   function handleReset() {
      setIsRunning(false)
      setTime(0)
   }

   return (
     <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl text-center space-y-6">
      <TimeDisplay time={time} />

      <div className="flex justify-center gap-4">
        {!isRunning ? (
          <button
            onClick={handleStart}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-xl transition"
          >
            Start
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-xl transition"
          >
            Pause
          </button>
        )}

        <button
          onClick={handleReset}
          className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-xl transition"
        >
          Reset
        </button>
      </div>
    </div>
   )
}

export default Stopwatch;

/* 
   State: 
      const [time, setTime] = useState(0)
      const [isRunning, setIsRunning] = useState(false)

   time -> elapsed milliseconds
   isRunning -> controls interval lifecycle
   ---------------------------------------------------
   Refs:
      const intervalRef = useRef(null)
      const starttimeRef = useRef(0)
   Why useRef ?
   because:
      - we don't want rerenders when they change
      - we need persistent values between renders
   
   intervalRef
      stores interval ID -> so we can clear it
   startTimeRef
      stores start timestamp -> prevents time drift
   -----------------------------------------------------
   useEffect(interval control)
      useEffect(() => {...}, [isRunning])
   
   Runs whenever isRunning changes.
   if running:
      store start time
      start interval
      Update every 10ms
   if stopped:
      clear interval
   Cleanup function:
      return () => clearInterval(intervalRef.current)
   prevents memory leaks.

   Why this is professional:
   we do not :
      increment time blindly
      rely on interval precision
      create multiple intervals
      cause drift
   we compute:
      Date.now() - startTimeRef.current
   That ensures accurate timing.
*/