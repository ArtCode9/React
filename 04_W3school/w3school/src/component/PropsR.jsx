/* 
Props are arguments passed into React components.
Props are passed to components via HTML attributes.
props stands for properties.

React Props are like function arguments in JavaScript and attributes in HTML.
To send props into a component, use the same syntax as HTML attributes:

Every attribute is sent to the Books component as object properties.

React props can be of any data type, including variables, numbers, strings, objects, arrays, and more.

Strings can be sent inside quotes, variables, and objects need to be sent inside curly brackets.

Note: React Props are read-only! You will get an error if you try to change their value.

*/

function Books(books) {

   return (
      <div>
         <p>i love {books.name} books.</p>
         <p>Publish in {books.year}</p>
         <p>By the great author {books.author}</p>
      </div>
   );
}

export default Books;