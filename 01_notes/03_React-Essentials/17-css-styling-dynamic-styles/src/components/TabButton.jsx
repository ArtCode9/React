export default function TabButton ({ children, onSelect, isSelected }) {
   console.warn(`TabButton component Executed`);

    return (
      <li>
         <button className={ isSelected ? 'active' : undefined } onClick={onSelect}>{children}</button>
      </li>
   );
}

// children get first component from props i think that's it.  