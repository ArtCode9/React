# Refs & Portals
Advanced DOM Access and Value Management

   - Accessing DOM Elements with Refs
   - Managing Values with Refs
   - Exposing API Functions from Components
   - Detaching DOM Rendering from JSX Structure with Portals
----------------------


## The concept of "React Fragments" (```<Fragment> ... </Fragment> or <> ... </>```).

When writing JSX code there's one important rule: A JSX value must have only one root element.

for example the following code would be invalid and cause an error:
```js
return (
   <h2>Welcome!</h2>
   <p>react is awesome!</p>
); 
```
so would this code: 
```js
const content = (
   <h2>Welcome!</h2>
   <p>React is awesome</p>
);
```

In both snippets , the JSX value has two sibling root elements - and that is not allowed!

One solution would be to wrap these elements into a <div>- which then acts as a single root JSX element:

```js
return(
   <div>
      <h2>Welcome!</h2>
      <p>React is awesome!</p>
   </div>
);
```

this would work and therefore is an acceptable solution.
But it has a downside: You now have that extra <div> in your DOM - even though you don't really need it (besides for getting rid of the this error).
That's why React offers a better solution: A special JSX element called "React Fragment".


It can be used as a wrapper to ensure that there's only one root JSX element whilst at the same time not rendering any DOM element.

You can use it like this:

```js
import { Fragment } from 'react';

// ... other code ...
return (
  <Fragment>
    <h2>Welcome!</h2>
    <p>React is awesome!</p>
  </Fragment>
);
```

Most React projects (e.g., projects created with Vite or create-react-app) offer an even shorter form:

// no import needed

```js 
return (
   <>
      <h2>Welcome!</h2>
      <p>React is awesome!</p>
   </h2>
);
```

----------------------------------

# Accessing DOM Elements with "refs"

### Instructions : 
Your given a code snippet that's part of a bigger app that deals with user image uploads.

Since the native, built-in ```<input type="file"> ```element is hard to style and doesn't fit the intended app style, it's hidden via display: none in the provided index.css file.

Therefore, to make the file picker work without being displayed, your task is to ensure that the click event on the ```<input type="file">``` element is triggered whenever the ```<button>Pick Image</button>``` is clicked.

This can be achieved by calling the built-in click() method on the underlying input element.

You should use React's "ref" feature to get hold of the ```<input type="file">``` element and execute that click() method on it whenever the ```<button>``` is clicked.


***Important***: In this Udemy exercise environment, React hooks must be used directly on the imported React object (import React from 'react'). For example, useState (which you don't need for this task) would then be called like this: React.useState().


---------------------------

# State vs Refs

## State :
   - Causes component re-evaluation(re-execution) when changed
   - Should be used for values that are directly reflected in the UI
   - Should not be used for behind the scenes values that have no direct UI impact

## Refs :
   - Do not cause component re-evaluation when changed
   - Can be used to gain direct DOM element access(-> great for reading values or accessing certain browser API's)

------------------------

