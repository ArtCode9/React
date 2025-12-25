// exporting module section 

// === var
export let mes = `This message come from inside module section `;




// === function
export function sum(a, b){
   return a + b;
}


export default function () {
   return `is default code of exporting module`;
};
export { mes as fun2};