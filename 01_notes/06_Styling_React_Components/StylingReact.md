# Styling React 
Static and Dynamic styling for pretty apps
 
   - Styling with vanilla css
   - Scoping style with css modules
   - css-in-js style with styled component
   - styling with Tailwind css
   - Static Dynamic(conditional) styling

----------------

## Vanilla CSS: 

### Advantages
   - Css code is decoupled from jsx code
   - you write css code as you (maybe) know and (maybe) love it
   - css code can be written by another 
   developer who need only a minimal 
   amount of access to your jsx code

### Disadvantages: 
   - you need to know css
   - css code is not scoped to components -> css rules may clash cross components(e.g same css class name used in different components for different purpose)

---------


#### The style prop takes a dynamic value
 using inline style in jsx 
  example: 
```jsx 
   <p style={{
      color: 'red'
   }}></p>
```

### inline styles: Advantages and disadvantage
-  Advantage:
   - Quick and easy to add to jsx
   - styles only effect the element to which you add them
   - Dynamic (conditional) styling is simple

- Disadvantage: 
   - You need to know css
   - You need it style every element individually
   - no separation between css and jsx code

---------------------

# CSS Modules 💡💡
- Advantage : 
   - Css code is decoupled from jsx code
   - You write css code as you (maybe) know nad (maybe) love it
   - css code can be written by another developer who need only minimal amount of access to your jsx code
   - css classes are scoped to the component -> file which import them -> no css class name clashes

- Disadvantage: 
   - you need to know css
   - You may end up with many relatively small css file in your project

---------------------

# Styled Components Introduce:
```
   npm install styled-components
```

⚠️ i run this on terminal in 02-scoping-css 

also search for tagged template :

a more advanced form of template literals are tagged template.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates

--------

# tagged templates


Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.

Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders). However, a tagged template literal may not result in a string; it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals


-------------------

# Styled Component:

##### (Creating Reusable Components & Component Combinations)

Advantage:
   - Quick and easy to add
   - You continue thinking in react(configurable style functions)
   - styles are scoped to components -> no CSS rule clashes


Disadvantages:
   - You need to know CSS
   - No clear separation of React and css code
   - You end up with many relatively small wrapper components



---------------
# Tailwind 🪡🪡
Get started with Tailwind CSS

https://tailwindcss.com/docs/guides/vite

also check Your mind map in this project 05 
and mind map exercise ex6_tailwinds

------------------------------

 