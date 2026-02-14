# 🟢 Level 1 - React Fundamentals

#### 🟪 1. JSX
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

#### 🟪 2. Components
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

#### 🟪 3. Props
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

#### 🟪 4 . State (useState)
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

#### 🟪 5 . Events
Special attributes in JSX that let you handle user interactions like clicks, typing, or form submissions.

React wraps native DOM events so you can attach functions (event handlers) directly in JSX using camelCase, e.g., ```onClick={handleClick}```.

```jsx
<button onClick={() => setIsOpen(true)}/>
```
Concepts:
   - Synthetic events
   ```txt
   React’s cross-browser wrapper around native DOM events that provides a consistent API.

   In simple terms: Instead of dealing with browser quirks, React gives you a uniform event object for all events (like onClick or onChange) that works the same everywhere.
   ```
   - Event pooling (historical)
   ```txt
   An old React optimization where a single SyntheticEvent object was reused for multiple events to save memory.

   In simple terms: In earlier React versions, event objects were “pooled” and cleared after the event callback—so accessing event asynchronously required calling event.persist() to keep it. Modern React no longer relies on pooling.
   ```
   - Inline vs Extracted handler
   ```txt
   Two ways to define event handlers in React—inline directly in JSX, extracted as separate functions in the component.
   ```
   >Inline: <button onClick={() => doSomething()}>Click</button> → quick but creates a new function on every render.

   >Extracted → cleaner, avoids unnecessary re-creations, easier to reuse and test.
   ```jsx
   const handleClick = () => doSomething();
   <button onClick={handleClick}>Click</button>
   ```
<hr style="border: 4px solid seagreen">

#### 🟪 6 . Conditional Rendering
Displaying different UI elements based on a condition or state.

In simple terms: You can show or hide components using JavaScript logic—like if statements, ternary operators, or &&—so the UI changes dynamically based on your data or state.
```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```
```jsx
{isLoading && <Spinner />}
```
Concepts:
   - Short circuit
   - Ternary
   - Guard clauses

<hr style="border: 4px solid seagreen">

#### 🟪 7 . Lists and Keys
```jsx
tasks.map(task => (
   <TaskCard key={task.id} {...task}/>
))
```
Concepts:
   - Reconciliation
   ```txt
   Using key props on list items so React can efficiently identify which elements have changed, been added, or removed during re-renders.

   In simple terms: Keys help React match old and new elements in a list, minimizing unnecessary DOM updates and improving performance.
   ```
   Example: 
   ```jsx
   {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
   ```
   - Why key must be stable
   ```txt
   Because React relies on keys to track elements between renders—if a key changes unnecessarily, React will treat it as a new element and discard the old one.

   In simple terms: A stable key ensures React can correctly update only what changed, avoiding unnecessary re-renders, loss of component state, or UI glitches.
   ```
   - Index key problem
   ```txt
   Using the array index as a key can cause bugs when the list changes (like items added, removed, or reordered).

   In simple terms: If you use index as a key, React may reuse the wrong components, leading to unexpected UI behavior or lost state. Always prefer a unique and stable identifier instead of the index.
   ```
   <hr style="border: 8px solid purple">

   # 🟡 Level 2 - Hooks Deep Dive

#### 🟪 8 . useEffect
A React Hook that lets you perform side effects (like data fetching, subscriptions, or DOM updates) after a component renders.

In simple terms: useEffect runs code outside the normal rendering—you tell React when to run it using a dependency array, so effects run only when needed. 

Example: 
```jsx
useEffect(() => {
   fetchData();
}, [dependency]); // runs when 'dependency' changes
```
Concepts:
   - Lifecycle equivalence
   ```txt
   useEffect can mimic class component lifecycle methods depending on how you use its dependency array.

   In simple terms:
   - useEffect(() => { … }, []) → like componentDidMount (runs once after first render)

   - useEffect(() => { … }) → like componentDidMount + componentDidUpdate (runs after every render)
   
   - useEffect(() => { return cleanup }, []) → like componentWillUnmount (cleanup before unmount)
   ```
   - Dependency array
   ```txt
   An array of values that tells React when to re-run the effect.

   In simple terms: React runs the effect only if one of the dependencies changes—leaving it empty [] runs it once, omitting it runs on every render, and adding variables re-runs when those variables change.
   ```
   ```jsx
   useEffect(() => {
      console.log(count);
   }, [count]); // runs only when 'count' changes
   ```
   - Cleanup
   ```txt
   A function returned from useEffect that runs before the component unmounts or before the effect runs again.

   In simple terms: Cleanup is like tidying up—removing subscriptions, timers, or event listeners so they don’t cause memory leaks or unwanted behavior.
   ```
   ```jsx
   // example
   useEffect(() => {
      const timer = setInterval(() => console.log('tick'), 1000)
      return () => clearInterval(timer); // cleanup
   }, []);
   ```
   - Infinite loop mistakes
   ```txt
   Happens when the effect updates a state that is also listed in its dependency array, causing it to run repeatedly.

   In simple terms: If you change a state inside useEffect without controlling dependencies, React keeps re-running the effect forever—always double-check what’s in the dependency array.
   ```
   ```jsx
   // Example:
   const [count, setCount] = useState(0);
      useEffect(() => {
      setCount(count + 1); // triggers re-render → effect runs again → infinite loop
   }, [count]);
   ```
<hr style="border: 4px solid seagreen">

#### 🟪 9 . useRef
A React Hook that holds a mutable value or a reference to a DOM element that persists across renders without causing re-renders.

In simple terms: useRef is like a “box” where you can store a value or a DOM node—updating it doesn’t trigger a component re-render.

Example for DOM:
```jsx
   const inputRef = useRef();
   <input ref={inputRef}/>
   inputRef.current.focus();
```
Example for Value:
```jsx
   const countRef = useRef(0);
   countRef.current += 1; // doesn't re-render the component
```
Concepts:
   - DOM reference
   - Mutable container
   - Avoiding re-renders

<hr style="border: 4px solid seagreen">

####  🟪 10 . useMemo
A React Hook that memoizes (caches) the result of a computation so it only recalculates when its dependencies change.

In simple terms: useMemo helps optimize performance by avoiding expensive calculations on every render.  (Optimization for expensive calculations.)

Example:
```jsx
const expensiveValue = useMemo(() => computeHeavyTask(a, b), [a, b]);
```
Here, ```computeHeavyTask``` runs only when a or b changes, not on every render.

Concepts: 
   - Referential equality
   ```txt
   useMemo preserves the same object or array reference between renders as long as dependencies don’t change.

   In simple terms: This prevents React from thinking a new object/array was created every render, which helps avoid unnecessary re-renders of child components or effects that depend on that value.
   ```
   ```jsx
   const memoizedObj = useMemo(() => ({ name: 'John' }), []);
   // memoizedObj keeps the same reference across renders
   ```
   - Memoization
   ```txt
   The process of caching the result of a function so it doesn’t have to be recalculated on every render.

   In simple terms: useMemo remembers the output of an expensive computation and reuses it until its dependencies change, improving performance.
   ```
   ```jsx
   const fib = useMemo(() => calculateFibonacci(n), [n]);
   // calculateFibonacci runs only when 'n' changes
   ```
   - Premature optimization warning
   ```txt
   Avoid using useMemo everywhere—memoizing cheap calculations can add unnecessary complexity without improving performance.

   In simple terms: Only use useMemo for expensive computations or large objects/arrays that would actually slow down renders; otherwise, it’s overkill and can make code harder to read.
   ```
<hr style="border: 4px solid seagreen">

####  🟪 11 . useCallback
A React Hook that memoizes a function so it keeps the same reference between renders unless its dependencies change.

In simple terms: useCallback prevents unnecessary re-creations of functions, which helps avoid needless re-renders of child components that rely on those functions.

```jsx
const handleClick = useCallback(() => {
   console.log('Clicked!');
}, []); // same function reference across renders
```
```jsx
const handleDelete = useCallback(() => {
   dispatch(deleteTask(id));
}, [dispatch]);
```
Concepts:
   - Function identity
   - Preventing child re-renders
   ```txt
   Using useCallback keeps a function’s reference stable, so memoized child components (React.memo) don’t re-render unnecessarily when the parent renders.

   In simple terms: Without useCallback, a new function is created every render, which makes children think props changed and re-render—useCallback stops that.
   ```
   Example: 
   ```jsx
   const handleClick = useCallback(() => console.log('Clicked!'), []);
   <ChildComponent onClick={handleClick}/> // child won't re-render if memoized
   ```

<hr style="border: 4px solid seagreen">

####  🟪 12 . Custom Hooks
Functions you create that use built-in Hooks to encapsulate and reuse stateful logic across components.

In simple terms: Custom Hooks let you extract repeated logic (like fetching data or handling forms) into a reusable function that any component can call.

Example:
```jsx
function useCounter(initial) {
   const [count, setCount] = useState(initial);
   const increment = () => setCount(c => c + 1);
   return { count, increment}
}

const { count, increment } = useCounter(0);
```
```jsx
function useAuth() {
  const user = useSelector(state => state.auth.user);
  return { user };
}
```
Concepts:
   - Logic reuse
   - Encapsulation
   - Hook rules

<hr style="border: 8px solid purple">

#  🟠 Level 3 - Architecture and Routing

🟪 React Router
```jsx
<Route path="/dashboard" element={<Dashboard />}/>
```
Concepts:
   - SPA navigation
   - Nested routes
   - Protected routes
   - useParams
   - useNavigate
   - Outlet

<hr>
🟪 Protected Route

```jsx
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return children;
}
```
Concepts:
   - Authentication gating
   - Redirect Logic

<hr style="border: 8px solid purple">

#  🔴 Level 4 - State Management
we compare: 

Context API:

- Good for: 
   - Theme
   - Auth

Redux Toolkit:

- Good for: 
   - Complex global state
   - Large apps

Redux Slice example:
```jsx
   const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    }
  }
});
```
Concepts:
   - immer
   - Immutable updates
   - Action creators
   - Selectors
<hr style="border: 8px solid purple">

# 🟣 Level 5 - Server State (React Query)

```jsx
const { data, isLoading } = useQuery({
  queryKey: ['tasks'],
  queryFn: fetchTasks
});
```
Concepts:
   - Client state vs server state
   - Caching
   - Background refetching
   - Optimistic

<hr style="border: 8px solid purple">

# 🔵 Level 6 - Forms And  validation

Using React Hook form + Zod
```jsx
const schema = z.object({
  title: z.string().min(3),
});
```
Concepts:
   - Controlled vs uncontrolled
   - Schema validation
   - Error Handling
   - Performance benefits

<hr style="border: 8px solid purple">

# 🟠 Level 7 - Advanced Patterns

Compound Components
```jsx
<Modal>
  <Modal.Header />
  <Modal.Body />
</Modal>
```
Concepts:
   - Flexible API design

Render Props

HOC (higher order component)

Error Boundary
```jsx
class ErrorBoundary extends React.Component {
  componentDidCatch(error) {
    console.log(error);
  }
}
```
Concepts:
   - Catch runtime UI errors

Code splitting:
```jsx
const Dashboard = React.lazy(() => import('./Dashboard'));
```
Concepts: 
   - Lazy loading
   - Suspense

<hr style="border: 8px solid purple">

# 🟢 Level 8 - Performance Engineering
- React.memo
- Virtualization
- Bundle analysis
- Tree shaking
- Avoiding unnecessary re-renders

<hr style="border: 8px solid purple">

# 🟢 Level 9 - Drag and Drop(Kanban Board)

Using DND Kit.

Concepts:
   - sensor
   - Sortable context
   - Reordering arrays

<hr style="border: 8px solid purple">

# 🟢 Level 10 - Testing

Using:
   - Jest
   - React Testing Library

Test Example: 
```jsx
test('renders task title', () => {
  render(<TaskCard title="Test Task" />);
  expect(screen.getByText(/Test Task/)).toBeInTheDocument();
});
```
Concepts:
- Unit testing
- Integration testing
- Mocking API
- Testing async behavior

<hr style="border: 3px solid tomato">

# Final Structure
```txt
src/
 ├─ app/
 ├─ features/
 │   ├─ auth/
 │   ├─ tasks/
 │   └─ projects/
 ├─ components/
 ├─ hooks/
 ├─ pages/
 ├─ services/
 ├─ routes/
 └─ utils/
```
### Deployment

Environment variables

Production build

Hosting (Vercel / Netlify)

CI/CD basics