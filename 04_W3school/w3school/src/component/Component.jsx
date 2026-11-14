import InOutCom from "./InOutCom.jsx";
/* 
Components are independent and reusable bits of code.
They serve the same purpose as JavaScript functions,
but work in isolation and return HTML.

Components come in two types, Class components and Function components

Component name must start with uppercase.


*/

function InnerCompo() {
   return (
      <>
         <h5>Inner COMPONENT</h5>
      </>
   );
}


function ComponentOne(section) {  // props pass from  App.jsx also we can display two different things with one 
   return (
      <div>
         <p>This is a component {section.part}</p>
         <InnerCompo />
         <InOutCom />
         <br></br>
         <InOutCom />
      </div>
   );
}

export default ComponentOne;
