function formatTime(milliseconds) {

   const totalSeconds = Math.floor(milliseconds / 1000);
   const minutes = Math.floor(totalSeconds / 60);
   const seconds = totalSeconds % 60;
   const ms = Math.floor((milliseconds % 1000) / 10);

   return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(ms).padStart(2, '0')}`;
}

function TimeDisplay ({ time }) {
   return (
      <div className="text-5xl font-mono text-cyan-400 tracking-widest">
         {formatTime(time)}
      </div>
   )
}

export default TimeDisplay;

/* 
   🔎 Explanation:
      - Convert raw milliseconds -> formatted string
      - Uses:
         - Math.floor
         - Modulo %
         - padStart()
      - Keeps display logic separate from stopwatch logic

   TimeDisplay({ time })
      - Receives time via props
      - Pure component 
      - No state
      - just renders
*/