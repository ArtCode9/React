import styles from "./Controls.module.css";

function Controls ({ timer, onStart, onClick, onReset}) {
   return (
      <div className={styles.wrapper}>
         <button className={styles.button} onClick={onStart} disabled={timer !== 0}>
            start
         </button>
         
         <button className={styles.button} onClick={onClick} disabled={timer === 0}>
            Click me
         </button>

         <button className={styles.button} onClick={onReset}>
            reset
         </button>
      </div>
   );
}


export default Controls;