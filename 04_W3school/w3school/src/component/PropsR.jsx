/* 
Props are arguments passed into React components.
Props are passed to components via HTML attributes.
props stands for properties.

React Props are like function arguments in JavaScript and attributes in HTML.
To send props into a component, use the same syntax as HTML attributes:
*/

function Books(props) {

   return (
      <div>
         <p>i love {props.name} books.</p>
      </div>
   );
}

export default Books;