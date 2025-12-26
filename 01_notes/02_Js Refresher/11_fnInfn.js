/* 
   we define function inside function
*/

function init() {
   function greeting () {
      console.warn('Hi');
   }

   greeting(); // only available here 
}

// greeting();   // this out of reach outside the init function 

// init();

/* 
   we do this function inside function more a lot in React 🦖🦖z
*/