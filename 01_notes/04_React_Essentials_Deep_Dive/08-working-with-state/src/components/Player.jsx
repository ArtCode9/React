export default function Player({ name, symbol }) {  // function with props parameter inside ()
   return (
         <li> 
            <span className="player">
              <span className="player-name">{name}</span>
              <span className="player-symbol">{symbol}</span>
            </span>
            <button>Edit</button>
         </li>
   );
}