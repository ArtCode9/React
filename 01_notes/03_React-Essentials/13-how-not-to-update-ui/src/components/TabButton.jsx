export default function TabButton ({ children, onSelect }) {
   console.warn(`TabButton component Executed`);

    return (
      <li>
         <button onClick={onSelect}>{children}</button>
      </li>
   );
}

// children get first component from props i think that's it.  