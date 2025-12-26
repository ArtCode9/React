// objects can be used to group multiple value together
/**
 * object beside key value pairs can also
 * can store functions, which we then typically call methods. 
 */

const userDev  = {
   name: 'Max',   // name is property
   age: 32,
   greet() {
      console.warn(`Hello`);
      console.log(this.age); // this refer to this object
   }
}

// console.log(userDev.name); // this . is a key to accessing values in an object
// userDev.greet();


// with class keyword you can create a blueprint that can then later be used to create the actual object
// for class name you should start with capital first name

// so this is a blueprint with  name of Users
class Users {
   constructor (name , age) {
      this.name = name;
      this.age = age;
   }

   greeting  () {
      console.warn(`Hello Users Form class!`);
   }

}

// now we create a new object based on the class above (that blueprint)
const user1 = new Users("ARTCODE", 231);
// console.warn(user1);
// user1.greeting();