/* 
In HTML, the selected value in the drop down list is defined with the selected attribute:
Example:
```
            <select>
            <option value="Ford">Ford</option>
            <option value="Volvo" selected>Volvo</option>
            <option value="Fiat">Fiat</option>
            </select>
```

In React, the selected value is defined with a value attribute on the select tag:

*/
import { useState } from "react";

function SelectMy () {
   const [myCar, setMyCar] = useState("Volvo");

   const handleChange = (event) => {
      setMyCar(event.target.value);
   } 

   return (
      <form>
         <select value={myCar} onChange={handleChange}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
         </select>
      </form>
   );

}

export default SelectMy;

/* By making these changes to the <select> element, React is able to handle it as any other input element. */

