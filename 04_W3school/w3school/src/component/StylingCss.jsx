/* 
   we can style react with CSS : 
    - inline styling
    - CSS Stylesheet
    - CSS Modules
*/

/* 
________________________________________________________________
   inline styling :

```
   const Header = () => {
      return (
         <>
            <h1 style={{color: "red"}}>Hello style</h1>
            <p>Add A little style !</p>
         </>
      )   
   }
```

Note: In JSX, JavaScript expressions are written inside
      curly braces, and since JavaScript objects
      also use curly braces, the styling in the example above is written inside 
      two sets of curly braces {{}}.

Note: Since the inline CSS is written in a JavaScript object, properties
      with hyphen separators, like background-color, must be written with camel case syntax
      ex::  background-color  >>>>>>  backgroundColor

also can create an object with styling information and refer to it in the style attribute:

```
      const header = () => {
         const myStyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "22px",
            fontFamily: "Sans-Serif"
         };

         return (
            <>
               <h1 style={myStyle}>Hello Style!</h1>
               <p>Add A little style!</p>
            </>
         );
      }
```
____________________________________________________________________________
   CSS stylesheet:

You can write your CSS styling in a separate file,
just save the file with the .css file extension, and import it in your application.

Note: You can call the file whatever you like, just remember the correct file extension.

Create a new file called "MyStylesheet.css" and insert some CSS code in it.
Import the stylesheet in your application:

```
      import './MyStylesheet.css';
```
React knows that files imported with the .css extension, should be treated as a CSS Stylesheet.
Note: The styles will only be available for the component that imported it.

___________________________________________________________________________
   CSS Modules:

Another way of adding styles to your application is to use CSS Modules.
CSS Modules are convenient for components that are placed in separate files.

Note: The CSS inside a module is available only for the component that
      imported it, and you do not have to worry about name conflicts.

Create the CSS module with the .module.css extension, example: my-style.module.css.

```
      .bigRed {
         color: Tomato;
         padding: 40px;
         font-family: Sans-Serif;
         text-align: center;
      }
```

now import the styleSheet in your component:

Use import styles to import the stylesheet:
```
      import styles from './my-style.module.css';
```
You will learn more about CSS Modules in the next chapter.

*/