/* 
Adding Events
React events are written in camelCase syntax:

onClick instead of onclick.

React event handlers are written inside curly braces:

onClick={shoot}  instead of onclick="shoot()".

To pass an argument to an event handler, use an arrow function.
Event handlers have access to the React event that triggered the function.
*/

function Football() {
   const shoot = () => {
      alert("great Shot!");
   }

   const shoot2 = (a) => {
      alert(a);
   }

   const result = (a, b) => {
      alert(b.type)
      /* 
        'b' represents the react event that triggered the function,
        in this case the 'click' event
      */
   }

   return(
      <div>
         <hr></hr>
         <hr></hr>
         <button onClick={shoot}>Take the shot</button>
         <button onClick={() => shoot2("Gooooal!")}>Take the second shoot</button>
         <button onClick={(event) => result("2winner", event)}>take the result</button>
         <hr></hr>
         <hr></hr>
      </div>
   );
}

export default Football;