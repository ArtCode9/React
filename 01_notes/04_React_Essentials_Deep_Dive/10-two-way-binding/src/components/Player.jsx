import { useState } from 'react';
/* 
You’re importing React’s memory hook.
useState lets a function:
   - remember values between renders
   - trigger re-renders when those values change
Without this, your component would forget everything every time it re-renders.
*/

// Component definition + props
/* 
This is a function component.
You’re destructuring props immediately:
   - initialName → starting player name
   - symbol → X or O (or whatever)
*/
export default function Player({ initialName, symbol }) {  // function with props parameter inside ()
   /* 
      This creates state.
      - playerName → current value shown in UI
      - setPlayerName → function to update it
   Important
    - initialName is used only once, on the first render
    - After that, playerName lives independently
   This is why editing work
   */
   const [playerName, setPlayerName] = useState(initialName);

   /* 
      Second piece of memory.
         - isEditing = false → show text
         - isEditing = true → show input field
      You’re modeling UI modes as state. That’s very React.
   */
   const [ isEditing, setIsEditing] = useState(false);



   function handleEditClick () {
      setIsEditing((editing) => !editing);
      /* 
      state updates may be async
      this guarantees you flip the latest value
   So:
      click → false → true
      click again → true → false
   That’s your Edit / Save behavior.
      */
   }

   function handleChange (event) {
      console.warn(event);
      setPlayerName(event.target.value);
      /* 
      This runs every time the user types.
         - event → browser input event
         - event.target → the <input>
         - event.target.value → current text inside input
      */
   }

   let editablePlayerName = <span className="player-name">{playerName}</span>;
   // let btnCaption = 'Edit';

   if(isEditing) {
      editablePlayerName = (
         <input type='text' required value={playerName} onChange={handleChange} />
      );
      // btnCaption = 'Save';
   }

   return (
         <li> 
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit' }</button>
         </li>
   );
}

/* 
The full mental model (this is the key)
You are not “editing an input”.
You are doing this:
   - React owns the truth (playerName)
   - Input just reflects that truth
   - User actions send events
   - Events update state
   - State re-renders UI
There is no manual DOM manipulation.
No document.querySelector.
No value = ....

React does the syncing.
*/