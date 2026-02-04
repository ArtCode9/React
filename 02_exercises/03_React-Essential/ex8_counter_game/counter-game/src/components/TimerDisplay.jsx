import styles from './TimerDisplay.module.css';

function TimerDisplay ({ timer }) {
   return <div className={styles.timer}>timer: {timer}</div>
}

export default TimerDisplay;