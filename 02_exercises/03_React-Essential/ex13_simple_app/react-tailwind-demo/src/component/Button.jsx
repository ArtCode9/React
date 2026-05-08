function Button ({ onClick, children}) {
   return (
      <button
         onClick={onClick}
         className="bg-blue-900 px-4 py-12 rounded mt-3 mb-3"
      >
         {children}
      </button>
   );
}

export default Button;