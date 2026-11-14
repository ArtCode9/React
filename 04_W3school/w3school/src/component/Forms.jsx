function MyForm () {
   return (
      <form>
         <hr></hr>
         <label>Enter your name:
            <input type="text" />
         </label>
         <hr></hr>
         <hr></hr>
         <hr></hr>
      </form>
   );
}

export default MyForm;


/* 
In React, form elements like <input>, <textarea>, and <select> work a bit differently from traditional HTML.
In standard HTML, form elements maintain their own value based on user input.
For example, an <input type="text"> field keeps track of its own value in the HTML DOM.
In React, the value of the form element is kept in the component's state property
and updated only with the setState() function.

In other words; React provides a way to manage form data through component state,
leading to what are known as "controlled components."

Controlled Components:
In a controlled component, form data is handled by the React component.
The value of the input element is driven by the React state,
and any changes to that value are managed through event handlers that update the state.

When the data is handled by the components, all the data is stored in the component state.

We can use the `useState` Hook to keep track of each input
value and provide a "single source of truth" for the entire application.

*/