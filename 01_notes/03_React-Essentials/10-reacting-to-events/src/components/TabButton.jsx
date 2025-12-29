export default function TabButton ({ children }) {
   function handleClick () {
      console.warn('Hello world!');
   }
   
   return (
      <li>
         <button onClick={handleClick}>{children}</button>
      </li>
   );
}

// children get first component from props i think that's it. 