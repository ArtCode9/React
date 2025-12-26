/**
 * technically arrays are objects but they are special kind of  objects
 * 
 * Now an array is created by using square brackets.
 * array is to have just values which are stored in certain order
 * and which can be accessed by their position in that list.
 * 🦖 also arrays can contain any kinds of value. : other arrays, object, numbers, string...
 *    
 * you can access these utility array methods by using the array name and then the dot notation
 */

const hobbies = ["sports", "Cooking", "Reading"];
// console.warn(hobbies[0]);  // 0 is a number of index in array

hobbies.push("Working"); // add another value
// console.log(hobbies);


const fIndex = hobbies.findIndex((item) => {
   return item === "Cooking";
});
const fIndexTwo = hobbies.findIndex((item) => item === "game");

// console.log(fIndex);
// console.log(fIndexTwo);

/* 
   another very useful utility method is the map method.
   map allows you to transform every item in an array
   to another item. for that map, just like findIndex
   takes a function as an input typically such an arrow function
   since this is such a short and concise way.   

   map can really use it to transform any item to any other kind of item.
   also you can make object.
*/

const editedHobbies = hobbies.map((item) => item + "!");
// console.log(editedHobbies);

// make object from array 
const editedHobbiesObj = hobbies.map((item) => ({text: item}));
// console.warn(editedHobbiesObj);