import { useState } from 'react';

export default function Player({ initialName, symbol }) {  // function with props parameter inside ()

   const [playerName, setPlayerName] = useState(initialName);
   const [ isEditing, setIsEditing] = useState(false);


   function handleEditClick () {
      setIsEditing((editing) => !editing);
   }

   function handleChange (event) {
      console.warn(event);
      setPlayerName(event.target.value);
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