/* 
   tricky feature
*/

function handleTimeOut () {
   console.log("Timed Out!!");
}

const handleTimeOut2 = () => {
   console.log("Timed out ... again!!");
};

// here we pass the function as the value to the function 
// setTimeout(handleTimeOut , 4000);
// setTimeout(handleTimeOut2, 6000);
// setTimeout(() => {
//    console.warn(`Inside the main Timeout`)
// }, 8000);


// another example
function greeter(greetFn) {
   greetFn();
}

greeter(() => console.error(`Hiiiiii`));