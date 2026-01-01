# React Essentials - Deep Dive
In this section we go Beyond basic :
   - Behind the scenes of jsx
   - Structuring Components and state
   - Advanced state usage
   - Patterns and best practice (Tick tac to) 
---------------------------------

## You do not need JSX (But it's Convenient)

```js
<div id="content">
   <p>Hello World</p>
</div>
```
   - Requires build process and code transformation
   - Easy to read and understand

--------------------
```js
   React.createElement(
      'div',   //   <<<<<  Component type identifies the to be rendered components
      { id: 'content'},  //  <<< Props object sets component props
      React.createElement(
         'p',
         null,
         'Hello World' //  <<< Child content passed between the components tag 
      )
   );
```
   - Works without special build process and transformation 
   - pretty verbose and not necessarily intuitive
------------------------
custom component must be passed as a dynamic  value so to say like . 
``` buttonContainer={Section}```
