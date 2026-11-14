/* 
To be able to use conditional statements in
JSX, you should put the if statements outside
of the JSX, or you could use a ternary expression instead:
*/

function IfStatement () {
   const z = 14;
   const x = 5;
   let  y = "Apple";
   if(x < 10) {
      y = "Banana";
   }

   return (
      <>
         <h1>If Statement</h1>
         <h4>{y}</h4>
         <h4>{(z) < 10 ? "banana2" : "Apple"}</h4>
      </>
   );
}

export default IfStatement;

/* 
Note that in order to embed a JavaScript expression inside JSX, 
the JavaScript must be wrapped with curly braces, {}.
*/