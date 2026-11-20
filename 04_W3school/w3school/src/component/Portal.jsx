/* 
What are React Portals?
A Portal is a React method that is included in the `react-dom` package.
It is used to render HTML outside the parent component's DOM hierarchy.
Normally the returned HTML element is a child of the parent component, and returned like this:

Example:
without using the `createPortal` method:
```
   function myChild() {
      return (
         <div>
            Welcome
         </div>
      );
   }
```
But by using the createPortal method,
the HTML is not a child of the parent component,
and is rendered outside the parent component's DOM hierarchy:

```
      import { createPortal } from 'react-dom';

      function myChild () {
         return createPortal (
            <div>
               welcome to portal.
            </div>,
            document.body
         );
      }

      export default myChild;
```
_________________________________________________________________________________________
Syntax:
```
   import { createPortal } from 'react-dom';

   createPortal(children, domNode);
```
The first argument (children) is any renderable
React content, like elements, strings, or fragments.
The second argument (domNode) is a DOM element where the portal should be inserted instead.

React Portals are particularly useful for components like modals,
tooltips, and dialogs that need to break out of their container's layout.
here is an example of a modal component where the modal is rendered outside the parent components DOM hierarchy:
*/
import { useState } from "react";
import { createPortal } from 'react-dom';

function ModalPortal ({ isOpen, onClose, children }) {
   if(!isOpen) return null;

   return createPortal (
      <div style={{
         position: 'fixed',
         top: 0,
         left: 0,
         right: 0,
         bottom: 0,
         backgroundColor: 'rgba(0,0,0,0.5)',
         display: 'flex',
         alignItem: 'center',
         justifyContent: 'center'
      }}>
            <div style={{
               background:'white',
               padding: '20px',
               borderRadius: '8px'
            }}>
               {children}
               <button onClick={onClose}>Close</button>
            </div>
      </div>,
      document.body
   );
}

function MyAppPortal() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div>
         <h1>My App</h1>
         <button onClick={() => setIsOpen(true)}>
            Open Modal
         </button>

         <ModalPortal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <h2>Modal Content</h2>
            <p>This content is rendered outside the app component!</p>
         </ModalPortal>
      </div>
   );
}  

export default MyAppPortal;

/* 
   Example Explained:
   First we import the necessary functions:
      - `createPortal` from react-dom for creating the portal.
      - `useState` from react for managing the modal's open/close state.
   The `modal` component uses createPortal to render its content directly into the document.body element.

   Why Use Portals:
   Portals are particularly useful for:
      - Modals and dialogs
      - Tooltips
      - Floating menus
      - Notifications

 Any UI element that needs to "break out" of its container's layout, especially when the parent component has:
      - overFlow: hidden
      - z-index conflicts
      - Complex positioning requirements
*/