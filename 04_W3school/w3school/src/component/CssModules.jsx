/* 
CSS Modules let you write CSS that is scoped locally to a specific component.
This prevents CSS class name conflicts and makes your styles more maintainable.

What are CSS Modules?
In React, CSS Modules are CSS files where class names are scoped locally by default.

Note: CSS Modules are not a part of the React core library, but are supported
      by many React build tools.

The CSS file have to have the .module.css extension and can be used by importing it into your React file(s).

Creating a CSS Module:
Let's create a CSS module called Button.module.css, where we style some buttons.

Import and use the CSS Module in your component:
*/
import styles from './Button.module.css';

function CssModules() {
   return (
      <div>
            <button className={`${styles.mybutton} ${styles.primary}`}>
               My primary Button
            </button>
            <button className={`${styles.mybutton} ${styles.secondary}`}>
               My Secondary Button
            </button>
            <button className={styles.third}>
               Composes Button
            </button>
      </div>
   );
}

export default CssModules;

/* 
Example Explained
   - We import the styles object from the CSS Module
   - We use styles.mybutton to access the mybutton class
   - The actual class name of the button will be unique (e.g., _mybutton_q1obu_1)
*/