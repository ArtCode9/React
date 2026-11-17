/* 
In React the value of a textarea is placed in a value attribute, just like with the input element.
We'll use the useState Hook to manage the value of the textarea:
*/

import { useState } from 'react'

function FormTextarea () {
   const [mytxt, setMytxt] = useState();

   function handleChange(e) {
      setMytxt(e.target.value);
   }


   return (
      <form>
         <label>Write here :
            <textarea 
               value={mytxt}
               onChange={handleChange}
            />
         </label>
      </form>
   ); 
}


export default FormTextarea;

/* 
By making these changes to the <textarea> element, React is able to handle it as any other input element.
*/