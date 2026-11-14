import Son from "./Son.jsx";
import Daughter from "./Daughter.jsx";

function Parent() {
   return (
      <div>
         <h1>My two children</h1>
      <Son>
         This was written in the parent component,
         but displayed as a part of the son component
      </Son>
      <Daughter>
         <p>
            This was written in the parent compnent,
            but displayed as a part of the daughter component
         </p>
      </Daughter>
      </div>
   );
}


export default Parent;