# 🟢 Level 1 - React Fundamentals

#### 1. JSX
JSX allows writing UI in Javascript
```jsx
   const Welcome = () => {
      return <h1>Welcome to ProTasker</h1>
   };
```
Concepts:
   - JSX transpilation 
   > The process of converting JSX syntax into standard JavaScript (usually React.createElement calls) so browsers can understand and execute it.
   
   > In simple terms: JSX looks like HTML inside JavaScript, but browsers don’t understand it directly—so tools like Babel transform it into plain JavaScript before the code runs.

   - Expressions inside {}
   > A way to embed any valid JavaScript expression inside JSX so it can be evaluated and rendered dynamically.

   > In simple terms: Anything inside {} in JSX runs as JavaScript (like variables, function calls, math, ternary operators) and the result gets displayed in the UI.

   - Fragment usage
   >A way to group multiple JSX elements without adding an extra DOM node to the page.

   > In simple terms: React Fragments (```<>...</>``` or ```<React.Fragment>```) let you return multiple elements without wrapping them in a ```<div>```, so your DOM stays clean and lightweight.


<hr style="border: 4px solid seagreen">

#### 2. Components
Reusable, self-contained pieces of UI that encapsulate structure, logic, and behavior in React.

In simple terms: A component is like a custom HTML tag you create—it controls how a part of the interface looks and works, and you can reuse it anywhere in your app.

- Functional component
> React components defined as JavaScript functions that return JSX.

> In simple terms: Instead of using classes, you write a normal function that returns UI—and with Hooks, functional components can also manage state and lifecycle behavior.

- Reusable UI patterns
- Composition vs inheritance
```txt 
Two patterns for reusing code in React—composition builds components by combining smaller ones, while inheritance extends behavior from a parent class.
```
In simple terms:
>Composition (preferred in React) → You pass components as props or nest them inside others to build complex UIs.

> Inheritance → One class extends another to reuse logic (rarely used in React).

React strongly favors composition because it’s more flexible and easier to maintain.

```jsx 
function Button({ children, variant}) {
   return (
      <button className={`btn btn-${variant}`}>
         {children}
      </button>
   );
}
```
Concepts: 
   - Props: 
   >Read-only inputs passed from a parent component to a child component to configure its behavior and appearance.

   >In simple terms: Props are like arguments you pass into a function—they let you send data into a component so it can render dynamically.

   - Reusability: 
   ```txt
   The design principle of building components or logic so they can be used in multiple places without rewriting code.

   In simple terms: Write once, use many times—if a component is reusable, you can plug it into different parts of your app with different props instead of duplicating code.
   ```
   - Component abstraction
   ```txt 
   The practice of hiding internal implementation details of a component while exposing only a clear and minimal interface (usually via props).

   In simple terms: A component should show what it does through props, not how it does it—so other developers can use it without caring about its internal logic.
   ```
<hr style="border: 4px solid seagreen">

#### 3. Props
Props are immutable inputs.
```jsx
<TaskCard title="Fix Login Bug" priority="high"/>
```
Concept:
   - Destructuring
   ```txt
   Extracting specific values from the props object directly in the function parameter or inside the component for cleaner code.

   In simple terms: Instead of writing ```props.name``` and ```props.age```, you can do { name, age } = props (or in function parameters) to use name and age directly.
   ```

   - Default Props
   ```txt
   Predefined values for props that a component uses when no value is provided by its parent.

   In simple terms: If a parent doesn’t pass a prop, the component will automatically use its default value so it still works correctly.
   ```
   - Prop drilling problem
   ```txt
   When you have to pass props through many intermediate components just to reach a deeply nested child.

   In simple terms: It’s like passing a message down a long chain of people—intermediate components don’t need it, but they still have to carry it, which makes code messy and hard to maintain.
   ```

<hr style="border: 4px solid seagreen">

#### 4 . State (useState)
>A React Hook that lets functional components store and manage dynamic data that changes over time.

>In simple terms: useState gives your component its own memory—when the state changes, React automatically re-renders the component to reflect the new data.

```jsx
const [isOpen, setIsOpen] = useState(false);
```
Concepts:
   - Re-render cycle
   ```txt
   The process where updating a component’s state triggers React to re-run the component function and update the UI.

   In simple terms: When you change state with setState or useState, React “repaints” the component with the new data, so the UI always stays in sync with the state.
   ```
   - Functional updates
   ```txt
   A way to update state based on its previous value by passing a function to setState instead of a direct value.

   In simple terms: When the new state depends on the old state, you use setState(prev => newValue) to ensure the update is accurate, especially with asynchronous state changes.
   ```
   - State immutability
   ```txt
   The principle of never modifying the state object or array directly, but creating a new copy with the updates instead.

   In simple terms: Instead of changing the old state, you make a new version—this helps React detect changes correctly and re-render the UI efficiently.
   ```
<hr style="border: 4px solid seagreen">

#### 5 . Events
Special attributes in JSX that let you handle user interactions like clicks, typing, or form submissions.

React wraps native DOM events so you can attach functions (event handlers) directly in JSX using camelCase, e.g., ```onClick={handleClick}```.

```jsx
<button onClick={() => setIsOpen(true)}/>
```
Concepts:
   - Synthetic events
   - Event pooling (historical)
   - Inline vs Extracted handler