/*
You can limit the properties a component receives by using destructuring.

Note: React uses curly brackets to destructure props: {props}

You can also destruct the properties you need inside the component.

When you don't know how many properties you will receive, you can use the ...rest operator.
Meaning: you can specify the properties you need, and the rest will be stored in an object.

Example:
The component specifies the color and the brand, but the rest is stored in an object like this:
{ model: "Mustang", year: 1969 }.

```
function Car({color, brand, ...rest}) {
  return (
    <h2>My {brand} {rest.model} is {color}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} />
);
```

Default Values
With Destructuring, you can set default values for props.
If a property has no value, the default value will be used.
*/

function Paint (colors) {

/* This way, the component receives all the properties, but the destructuring makes sure it only uses the ones it needs. */
   const {brand, color, owner ="admin"} = colors;

   return (
      <>
         <h4>The color is choose: {color} with {brand} for {owner}</h4>
         <hr></hr>
         <hr></hr>
         <hr></hr>
         <hr></hr>
      </>
   )
}

export default Paint;