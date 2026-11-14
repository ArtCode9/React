/* 
We can use the `if` JavaScript operator to decide which component to render.

Another way to conditionally render a React component is by using the && operator.
```
      function Car(props) {
         return (
            <>
               {props.brand && <h1>My car is a {props.brand}!</h1>}
            </>
         );
      }

         createRoot(document.getElementById('root')).render(
         <Car brand="Ford" />
      );
```
If props.brand evaluates to true, the expression after && will render.

Another way to conditionally render elements is by using a ternary operator.

condition ? true : false

*/
function MissedGoal() {
   return <h1>Missed!</h1>
}

function MadeGoal() {
   return <h1>Goal!</h1>
}


function GoalCount(props) {
   const isGoal = props.isGoal;

   if(isGoal) {
      return MadeGoal();
   }
   return MissedGoal();
   /* 
    return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
   */
}

export default GoalCount;