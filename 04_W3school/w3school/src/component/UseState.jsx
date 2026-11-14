/* 
Controlled Components:
In a controlled component, form data is handled by the React component.
The value of the input element is driven by the React state,
and any changes to that value are managed through event handlers that update the state.

When the data is handled by the components, all the data is stored in the component state.

We can use the `useState` Hook to keep track of each input
value and provide a "single source of truth" for the entire application.

*/
/* 1. Import the useState Hook from React: */
import { useState } from "react";


function MyFormTwo () {

/*2. Declare a state variable to hold the input's value and a function to update it:*/
/*To add an initial value to the input field in the example, add a value to the useState object like below "john":*/
   const [name, setName] = useState("John");


/*3. Create a function to handle the change event:*/
   function handleChange(e) {
      setName(e.target.value);
   }

   return (
      <form>
         <label>Enter your name:
{/*4. Set the value of the input field to the state variable and the onChange attribute to handle the change event:*/}
            <input 
               type="text"
               value={name}
               onChange={handleChange}
            />
         </label>
{/*5. Display the current value to show that the value is being updated:*/}
         <p>Current value: {name}</p>
      </form>
   );
}

export default MyFormTwo;