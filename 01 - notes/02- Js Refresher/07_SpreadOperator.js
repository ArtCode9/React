/* 
   the other crucial concept related to arrays and objects
   about which you should know is the special spread operator
*/

const hobbies2 = ["sports", "cooking"];

const newHobbies = ["reading"];

const mergedHobbies = [ ...hobbies2, ...newHobbies];

// console.log(mergedHobbies);

// now we can use  spread operator  ...   on object 
const userMan = {
   nickName: 'Decoder',
   age: 23,
}

const extendedUser = {
   isAdmin: true,
   ...userMan
}

// console.log(extendedUser);
