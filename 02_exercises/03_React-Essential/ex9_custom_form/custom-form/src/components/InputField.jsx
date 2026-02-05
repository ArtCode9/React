import React from 'react';

function InputField({ label, type = "text", name, value, onChange, error }) {
   return (
      <div className="mb-4">
         <label className='block text-grey-700 font-medium mb-1' htmlFor={name}>
            {label}
         </label>

         <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            className={
               "w-full px-3 py-2 border rounded-md focus:outline-none" +
               (error
                  ? "border-red-500 focus:ring-red-300"
                  : "border-grey-300 focus:ring-blue-300")
            }
            placeholder={label}
         />

         {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
      </div>
   );
}

export default InputField;