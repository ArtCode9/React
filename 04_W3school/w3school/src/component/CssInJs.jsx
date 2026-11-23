/* 
What is CSS-in-JS?
CSS-in-JS is a styling technique where you can write CSS directly in your JavaScript code.
This approach allows you to:
   - Write CSS using JavaScript
   - Create component-scoped styles
   - Use dynamic styles based on props
   - Avoid CSS class name conflicts
CSS-in-JS is not a part of the React core library,
but can be installed using many React build tools,
like Vite, Webpack, or Create React App.

To install `styled-components`, run the following command:
```npm install styled-components```
Now you can start writing CSS directly in your .jsx files:
*/
import styled from 'styled-components';

const MySection = styled.h1`
      padding: 50px 30px;
      background-color: #007bff;
      color: white;
`;

function CssInJs() {
   return (
      <div>
         <MySection>This is styled components inside JSX</MySection>
      </div>
   );
}
export default CssInJs

/* 
Without CSS-in-JS, you would have to either:
   - Write CSS in a separate .css file and import it into your React components
   - Use inline styles
Notice that:
   - We use the styled object to create components
   - Styles are written inside template literals (backticks)
   - You can use regular CSS syntax
*/