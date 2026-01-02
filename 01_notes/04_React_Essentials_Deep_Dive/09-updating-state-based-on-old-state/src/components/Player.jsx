import { useState } from 'react';

export default function Player({ name, symbol }) {  // function with props parameter inside ()
   const [ isEditing, setIsEditing] = useState(false);

   function handleEditClick () {
      setIsEditing((editing) => !editing);
      // this is simple a best way if you are updating your state based
      // on previous state value you should use this function from here 
      // of the state updating function.
   }

   let playerName = <span className="player-name">{name}</span>;
   // let btnCaption = 'Edit';

   if(isEditing) {
      playerName = <input type="text" required value={name}/>
      // btnCaption = 'Save';
   }

   return (
         <li> 
            <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit' }</button>
         </li>
   );
}