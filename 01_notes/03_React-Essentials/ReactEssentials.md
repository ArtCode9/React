# React Components: 

React app are built by combining components and that's are the foundation.
components are the one concept every React app, no matter it is complexity will use.

components are make and include from : html + css + JS

--------------------------

### why Components ?

#### 📦 Reusable building  blocks
   - creating small building blocks & compose the UI from them 
   - if needed: Reuse a building block in different part's of the UI (e.g a reusable button)

#### 🟧 Related code live's together
   - Related html & js (and possibly css) code is stored together
   - since js influences the output, storing js + html together makes sense

#### ⬅️➡️ Separation of concerns
   - Different components handle different data & logic
   - Vastly simplifies the process of working on complex apps
-------------------------------
=============AI Description ============

#### React Components

React apps are built by composing components.
That statement is 100% correct and foundational.

A more precise phrasing:

❎ Every React app—simple or complex—is a tree of components.

Components are the core abstraction in React.

## What components are made of

You wrote:

components are make and include from : html + css + JS

Conceptually right, but React-correct wording would be:

   - JS → logic, state, event handling

   - JSX → HTML-like syntax (not real HTML)

   - CSS → styling (optional, can be external or inline)

So:

Components combine logic (JS) + structure (JSX) + styling (CSS)

This distinction matters later when you learn tooling and performance.

### Why Components?

Everything here is correct. Let’s verify each point.

📦 Reusable building blocks

Absolutely correct.

React was designed around reusability through composition.

Example idea:

   - One ```<Button />```

   - Used in forms, modals, headers

   - Behavior stays consistent

This is one of React’s strongest advantages.

------------------
🟧 Related code lives together

This is intentionally different from old MVC thinking.

You wrote:

Related html & js (and possibly css) code is stored together

That matches React’s philosophy perfectly.

Why it works:

   - UI is a function of state

   - JS directly controls what gets rendered

   - Keeping them together reduces mental overhead

React calls this “co-location”, not a mistake.

--------------------------
⬅️➡️ Separation of concerns

This is correct, but with a React-specific twist.

In React:

   - Separation is by responsibility, not by file type

   - Each component owns:
      - Its data
      - Its logic
      - Its UI

So instead of:
   - HTML folder
   - CSS folder
   - JS folder

You get:
   - Button component
   - Form component
   - Header component

This does massively simplify large apps.

------------------------------



Say JSX instead of HTML

Fix grammar for clarity (not logic)

You’re clearly building real mental models, not memorizing buzzwords.
That’s the difference between someone who uses React and someone who understands it.

Next natural step after this:

Functional components

Props vs state

Component re-rendering (this is where React gets interesting)


---------------------------

instruction for run project local:
(after download zip file) 

navigate to the project folder📂
 ``` cd .\folder\project_folder```

```
  $ npm install   ---->  for install all library and modules and react lib and third party package
```
Then : 
```
   npm run dev  --->    run development server
```
------------------------------------

React Describe the target UI with JSX -> javascript syntax extension .jsx used to describe & create html elements in javascript in a declarative way.

with React you write declarative code , you define the target html structure & UI 
not the steps to get there~ but it is a feature does not supported by browsers.

React project come with a build process that transform jsx code (behind the scence) to code that does work in browser.

----------------------

# Component functions must follow Two rules:


## 1️⃣. Name starts with uppercase character:

   - The function name must start with an uppercase char
   - Multi-word names should be written in PascalCase (e.g "MyHeader")
   - it is recommended to pick a name that describe the UI building block (e.g "Header" or "MyHeader")

## 2️⃣. Returns "Renderable" Content: 

   - The function must return a value that can do rendered  ("displayed on screen") by React
   - in most cases: return JSX Also allowed: String, number, boolean, null , array of allowed value

------------------------------------

.jsx is a file extension that's not supported by the browser! It's working because you're working in a React project that supports this special extension. Because this extension "tells" the underlying build process (which is running behind the scenes when the development server is running) that a file contains JSX code (which is also not supported by browsers).

It's important to understand that it's really just that build process that cares about this extension.

And therefore, you'll also find React projects that don't use .jsx but instead just .js as a file extension. And in those .js files, you'll also find JSX code. Because it simply depends on the underlying build process which extension is expected when using this JSX syntax in a file.

Since it doesn't work in the browser either way, there is no hard rule regarding this. Instead, you'll find projects that require .jsx (like the project setup we use in this course) and you'll find projects that also support .js (with JSX code inside).

I'm emphasizing this here so that you're not confused if you encounter React projects that don't use .jsx files.

In addition, you'll also find projects that require the file extension as part of file imports (e.g., import App from './App.jsx') and you'll find other projects that don't require this (i.e., there, you could just use import App from './App').

This, again, has nothing to do with the browser or "standard JavaScript" - instead it simply depends on the requirements of the code build process that's part of the project setup you chose.


---------------------------

## Built-in Components 

   - Name starts with a  lowercase char
   - Only valid, officially defined html elements are allowed
   - Are rendered as DOM nodes by React (i.e displayed on the screen)

## Custom Components

   - Name starts with uppercase char
   - Defined by you "wraps" built-in or other custom components
   - React traverses the components tree until it has only built-in components left

---------------------------


### Q&A

1. Which statement about JSX is TRUE? 
   - JSX code is used to define the target UI / HTML code

2. What's the purpose of JSX?
   - It allows you to define the target HTML code inside of your components

3. Which statement about custom components is true?
   - Custom components can be created as JavaScript functions
   - To use custom components in JSX, they must start with an uppercase character
   - Custom components must return renderable content (typically JSX)
 
4. From the perspective of a developer: What's one advantage of building a user interface by combining components?
   - Small, reusable building blocks

5. When working with React: How is a new component defined?
   - By creating a function that returns JSX code

6. How do you typically use custom components?
   - You use custom components like HTML elements inside of JSX code

7. What does React do with the components you use in the JSX code?
   - It derives a component tree that's then used to perform commands that update the website DOM

---------------------------------

## How we can actually output dynamic content in such a component ?


### Static content : 
   - Content that is hardcoded into the JSX code
   - Can not change at runtime
   - Example:  ```<h1>Hello World!</h1>```

### Dynamic content 
   - Logic that produces the actual value is added to JSX
   - Content / Value is derived at runtime
   - Example:  ```<h1>{userName}</h1>```
----------------

React Project & "The Build Process"

React projects must be "built" (via a build process) before deployment

React Code(the react code you write and build) ---> ⚙️Build Process  --->  Deployable Files

#### ⚙️Build Process:
   - Changes & optimizes Your code
   - Transform it such that it runs in the browser
   - Also (Potentially) optimizes other assets like css and img file

#### Deployable Files
   - A collection of generated files that include your files that include your optimized code and any other extra assets(e.g CSS code files optimized img and etc)


----------------------------

Configuring Components with Props

React allows you to pass data to components vai a concept called "Props"

#### JSX Code that Uses a component (set Props)
   - set component input data via "Custom HTML attribute"(props)

#### 🧩 Component 
   - Defines internal logic + JSX code that should be rendered 
   - (Receive Props)

#### Component Function 
   - Receives props parameter with configuration data

Tips: Props Accept all value Types



----------------

# 06-alternative-props-syntax:

### Passing a Single Prop Object

If you got data that's already organized as a JavaScript object, you can pass that object as a single prop value instead of splitting it across multiple props.

I.e., instead of
```js
<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}  
  image={CORE_CONCEPTS[0].image} />
```
or
```js
<CoreConcept
  {...CORE_CONCEPTS[0]} />
```
you could also pass a single concept (or any name of your choice) prop to the CoreConcept component:
```js
<CoreConcept
  concept={CORE_CONCEPTS[0]} />
```
In the CoreConcept component, you would then get that one single prop:
```js
export default function CoreConcept({ concept }) {
  // Use concept.title, concept.description etc.
  // Or destructure the concept object: const { title, description, image } = concept;
}
```
It is entirely up to you which syntax & approach you prefer.

----------
### Grouping Received Props Into a Single Object

You can also pass multiple props to a component and then, in the component function, group them into a single object via JavaScript's "Rest Property" syntax.

I.e., if a component is used like this:

```js
<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}  
  image={CORE_CONCEPTS[0].image} />
```
You could group the received props into a single object like this:

```js
export default function CoreConcept({ ...concept }) { 
  // ...concept groups multiple values into a single object
  // Use concept.title, concept.description etc.
  // Or destructure the concept object: const { title, description, image } = concept;
}
```
If that syntax is a bit confusing - worry not! You'll also see concrete examples for this syntax (and for why you might want to use it in certain situations) throughout the course!

----------------

### Default Prop Values

Sometimes, you'll build components that may receive an optional prop. For example, a custom Button component may receive a type prop.

So the Button component should be usable either with a type being set:

```js
<Button type="submit" caption="My Button" />
```
Or without it:

```js
<Button caption="My Button" />
```
To make this component work, you might want to set a default value for the type prop - in case it's not passed.

This can easily be achieved since JavaScript supports default values when using object destructuring:

```js
export default function Button({ caption, type = "submit" }) { 
  // caption has no default value, type has a default value of "submit"
}
```
-----------------------------------
How should you typically load / use images in React projects?
   -  Set the ```<img>``` src equal to the path generated via an import statement (that points at the image)

Which core React concept can increase the reusability of React components?
   - Props

How do "props" work in React?
   - You can set props ("custom attributes") on components to then extract & use them in the receiving component

How can you assign a dynamic value to an HTML element attribute?
   - Via the same syntax you use for dynamic values in JSX in general: Curly braces

Which syntax can be used to output dynamic values / JavaScript expressions in JSX?
   - { } (Curly braces)

Which values can be output as dynamic values in JSX (i.e., between curly braces)?
   - Any valid JavaScript expression

---------------------------------

every custom component will receive props.

-----------------------------

## "Children" prop vs "Attribute Props"

### Using "Children" :
```js 
<TabButton>Components</TabButton>
```
```js
function TabButton({ children }){
   return <button>{children}</button>
}
```
For Components that take a single piece of renderable content, this approach is closer to normal html usage

This approach is especially convenient when passing JSX code as a value to another component

-------------------------
### Using attribute :
```js 
<TabButton label="Component"></TabButton>
```
```js
function TabButton({ label }) {
   return <button>{label}</button>
}
```
This approach makes sense if you got multiple smaller pieces of information that must be passed to a component

Adding extra props instead of just wrapping the content with the component tags mean extra work

***Ultimately , it comes yo your use-case and personal preferences***

----------

## Best Practices & Event Handling

1. How should you typically store your component functions?

   - Split across multiple files (one component per file)


2. How can you handle user events in React projects?

   - Via the built-in onXYZ props (e.g., onClick)

3. What's the purpose of the special "children" prop?

   - You can use it to pass and use content between your component's opening & closing tags.

4. How can you "configure" the execution of an event-dependent function (e.g., define which arguments get passed to it)?

   - By wrapping the function with another function (e.g., onClick={() => handleClick(5)})

5. To execute code upon events, which value must be passed to event props like onClick?

   - A pointer to the function that should be executed (e.g., onClick={handleClick})

------------------------
