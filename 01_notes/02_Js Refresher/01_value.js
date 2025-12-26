//  There are Different Types of values
/**
 * Primitive Types (7):::    ----> simple, atomic values
 *  String   "Hello";
 *  Number     2 , 34.2 , -12
 *  Boolean    tru or false 
 *  Null & undefined   
 *  symbol (ES6)
 *  bigint  
 *                  let a = 10;          
 *                  let b = a;  // Copy
 * 
 * Non-Primitive Type:::      ----->  collections, structures, behaviors
 *  Objects  (arrays and function are objects in JS )
 * 
 *                  let obj1 = { x: 10 };
 *                  let obj2 = obj1;    // reference
 * _________________________________________________
 * Variable are Data Containers:
 *    🔻 variable are simply data containers where You store a value in a variable
 *        whit a variable identifier like "myText"        
 * _________________________________________________
 * why use Variable ?
 *  1️⃣. Reusability:  Store a value in a variable once and use it as often and in as many places as needed
 *  2️⃣. Readability: Organize your code over several lines rather than cramming everything into a single line
 * _________________________________________________
 * identifiers must follow certain rules and recommendations:
 * 🟠 Must not contain whitespace or special characters(except $ and _)  ✅valid:  $userName, age, user_name
 * 🟠 may contain numbers but must not start with a number ✅valid: user3,  ue3r
 * 🟠 Must not clash with reserved keywords  ❌invalid:  let , const
 * 🟠 Should use camelCasing   userName , isCorrect
 * 🟠 Should describe what the "thing" it identifier contains or does  Ex: loadData, userName
 * ____________________________________________________
 * variable :     let  
 *                const  <<<<  not can be reassigned  so the value not change
 *                var
 * ___________________________________________________
 * 
 * */

// console.warn(`=============👇value section=============`);

let userName = 'ARTCODE';
let numberPhone = 9281272;
let developer = true ; 
let isLove =  undefined;

let user = {
   userName: "ARTCODE",
   numberPhone: 92389023,
   developer: true,
   isLove: undefined,
};

// can access value inside the object
// console.warn(user.developer);

// can change them 
user.isLove = true;
