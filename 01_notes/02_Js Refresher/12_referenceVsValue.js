/* 
   Primitive Values (by value)

   Primitive values are copied when assigned or passed around.

   Primitives:
   string, number, boolean, null, undefined, symbol, bigint
*/

let a2 = 10;
let b2 = a2;

b2 = 20;

// console.log(a2); // 10
// console.log(b2); // 20

/* 
   Why?
   a and b hold separate values. Changing one does not affect the other
*/

/* 
   Reference Values (by reference)
   Objects are shared by reference.
   Reference types:
         object, array, function
*/
let user11 = { name: 'Alice' };
let user22 = user11;

// user22.name = 'Bob';

// console.log(user11.name); // 'Bob'
/* 
   Why?
   Both variables point to the same object in memory. One object, two labels.

   --------------------

   The mental model
   Primitives → value copied
   Objects → reference copied
   If you remember only one sentence, make it this:
   Primitives are duplicated, objects are shared.

   -------------------
   so primitive can't edit You always produce new Values

   but object and array can be mutated the original array. and get address somehow
*/

let userMessage = 'This is only you got';
userMessage = userMessage.concat('!!!!!!!!!!');
// console.log(userMessage);