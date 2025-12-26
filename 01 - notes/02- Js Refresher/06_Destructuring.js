/* 
   Destructuring Arrays and objects

*/

const userNameData = ["Art", "Code"];

const firstName1 = userNameData[0];
const lastName1 = userNameData[1];

// but this code can be shortened.
// instead of using above code

// by destructuring::
const [firstName, lastName] = [ "Art", "Code"];  

// console.warn(firstName, lastName);

// now we can do  it for object
const userD = {
   name: "Max",
   age: 23,
};

// const name = userD.name;
// const age = userD.age;

// console.warn(name , age);

// now by destructuring:::
const { name: userNamed , age} = {
   name: "max",
   age: 23,
};

// console.log(userNamed);
// console.log(age);