const myobj = {
   name: "Fiat",
   model: "400",
   color: "blue",
};

/* 
   The style attribute in JSX only accepts a JavaScript object with
   camelCased CSS property names, rather than a CSS string (as in HTML).
   👇👇👇👇👇👇👇👇
*/

const objectHeadStyle = {
   color: "red",
   fontSize: "33px",
   backgroundColor: "black",
   padding: "33px",
}

/*----------------------------------------------------------------------------  
            Notice two things about the example objectHeadStyle.

The styles are stored in an object.
Style properties are written in camelCase, e.g. fontSize, instead of font-size.
This is an important difference between HTML and JSX.

----------------------------------------------------------------------------  */


function Object() {
   return (
      <>
         <h1 className="objectHead" style={objectHeadStyle}>Objet section components JSX</h1>
         <p>Another car is a {myobj.name} and model is {myobj.model} with {myobj.color}</p>
         <hr></hr>
      </>
   );
}

export default Object;