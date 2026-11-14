/* 
In React, you will render lists with some type of loop.

the javascript map() array method is generally the preferred method.

Keys in React Lists:
Keys allow React to keep track of elements.
This way, if an item is updated or removed,
only that item will be re-rendered instead of the entire list.

Keys must be unique among siblings, but they don't have to be unique across the entire application.
Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.


While it's possible to use the array index as a key, it's not recommended unless:
   - The list is static (won't change)
   - The list will never be reordered or filtered
   - The items in the list have no IDs
Using array indexes as keys (not recommended for dynamic lists):
``` Example:
               function MyCars() {
                  const cars = ['Ford', 'BMW', 'Audi'];
                  return (
                     <>
                        <h1>My Cars:</h1>
                        <ul>
                        {cars.map((car, index) => <li key={index}>I am a { car }</li>)}
                        </ul>
                     </>
                  );
               }

               createRoot(document.getElementById('root')).render(
               <MyCars />
               );
```

*/

function ListMap() {
/*    const country = ['German', 'Italy', 'Spain', 'England']; */
      const country = [
         {id: 1001, name: 'German'},
         {id: 1002, name: 'Italy'},
         {id: 1003, name: 'Spain'},
         {id: 1004, name: 'England'},
      ];

   return (
      <div>
         <h3>beautiful : </h3>
         <ul>
            {/* {country.map((map) => <li>This is {map}</li>)} */}
            {country.map((m) => <li key={m.id}>This is {m.name}</li>)}
         </ul>
      </div>
   );
}


export default ListMap;