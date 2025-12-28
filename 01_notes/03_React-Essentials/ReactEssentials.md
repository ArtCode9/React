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
