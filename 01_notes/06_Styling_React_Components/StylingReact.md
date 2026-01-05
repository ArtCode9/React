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






