/* 
   For checkbox use the checked attribute instead of value to control it's state.

   We will use the useState Hook to manage the value of the textarea:

   in the handleChange function use the e.target.type property check if the current input is a checkbox or not.
*/
import { useState } from "react";

function CheckBox () {

   const [inputs, setInputs] = useState({
         firstname: 'art',
         tomato: false,
         onion: true      
   });

   const handleChange = (e) => {
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      setInputs(values => ({...values, [name]:value}))
   }

   const handleSubmit = (event) => {
      let fillings = '';
      if(inputs.tomato) fillings += 'tomato';
      if(inputs.onion) {
         if(inputs.tomato) fillings += ' and ';
         fillings += 'onion';
      }
      if(fillings == '') fillings = 'no fillings';
      alert(`${inputs.firstname} wants a burger with ${fillings}`);
      event.preventDefault;
   } ;

   return (
      <div>
         <hr></hr>
         <hr></hr>
      <form onSubmit={handleSubmit}>
         <label>My name is :
            <input 
               type="text"
               name="firstname"
               value={inputs.firstname}
               onChange={handleChange}
               />
         </label>

         <p>I want a burger with:</p>
         <label>Tomato:
            <input 
               type="checkbox"
               name="tomato"
               checked={inputs.tomato}
               onChange={handleChange}
               />
         </label>
         <label>Onion:
            <input 
               type="checkbox"
               name="onion"
               checked={inputs.onion}
               onChange={handleChange}
               />
         </label>
         <button type="submit">Submit</button>
      </form>
            <hr></hr>
            <hr></hr>
      </div>
   );
}

export default CheckBox;

/* 
to add initial values to the input fields in the example above, add the proper keys and values to the useState object:

```
      const [inputs, setInputs] = useState({
         firstname: 'john',
         tomato: true,
         onion: false
      });
*/