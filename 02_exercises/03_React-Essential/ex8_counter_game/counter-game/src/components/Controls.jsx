function Controls ({ timer, onStart, onClick, onReset}) {
   return (
      <>
         <button onClick={onStart} disabled={timer !== 0}>
            start
         </button>
         
         <button onClick={onClick} disabled={timer === 0}>
            Click me
         </button>

         <button onClick={onReset}>
            reset
         </button>
      </>
   );
}


export default Controls;