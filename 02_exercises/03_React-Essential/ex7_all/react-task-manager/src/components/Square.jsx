
function Square ({ message, onSquareAction , setCounters}) {
   function handleClick() {
      console.log(`Square clicked!`)
      console.log(`Message inside square: ` , message)

      // call parent function
      onSquareAction(message)

      // Update parent state directly
      setCounters(prev => 
         prev.map(c => ({
            ...c,
            value: c.value + 1
         }))
      )
   }


   return (
      <div 
         onClick={handleClick}
         className="bg-orange-600 w-80 h-32 mb-6 mt-6 cursor-pointer p-4 rounded-xl"
      >
         <h1 className="text-black font-bold">
            I'sm Orange Square in your app
         </h1>
         <span className="text-white">{message}</span>

         <small className="text-white opacity-80">
            (Click me to increment all counters)
         </small>
      </div>
   )
}

export default Square

/* 
   3️⃣ What’s happening (IMPORTANT CONCEPT)
   Data flow direction
   -----------------------
   CounterDashboard (parent)
   ↓ props (message)
   ↓ props (function)
   Square (child)
   ----------------------
Parent owns the logic
Child triggers the logic

This is called:
   🔹 “Lifting behavior up”
   🔹 “Callback props”

5️⃣ Mental Model (Very Important)
❌ Child cannot change parent state directly
✅ Child requests change via function
Parent decides what to do
This is how real React apps work.
*/