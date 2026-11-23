/* 
Props in Styled Components
Another powerful feature of CSS-in-JS is the ability to
use props to make styles dynamic.
Let's create an example where we have two buttons, one primary and one secondary.
We want to base their background color on the value of the `btntype` prop:
*/

import styled from "styled-components";

const Button = styled.button`
   padding: 10px 20px;
   border: none;
   border-radius: 8px;
   background-color: ${props => props.btntype === 'primary' ? '#007bff' : '#6c757d'};
   color: white;
   cursor: pointer;
`;

/* 
we can set diff styled on Button
*/
const ArtButton = styled(Button)`
   background-color: orange;
   margin: 22px;
`;
/* 
You can also create global styles,
which will be given normal class name
and will be available for all components
```
      const GlobalStyle = createGlobalStyle`
            h1 {
               color: white;
               background-color: purple;
               font-family: Arial, sans-serif;
            }

            .myparagraph {
               font-family: courier, monospace;
               color: blue;
            }
      `;
```
*/


function CssInJsProps() {
   return (
      <div>
         <Button btntype="primary">Primary Button</Button>
         <br />
         <br/>
         <Button>Secondary Button</Button>
         <ArtButton>Art Button</ArtButton>
      </div>
   );
}

export default CssInJsProps