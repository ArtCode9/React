import React, { useState } from 'react';
import InputField from './InputField.jsx';
import PasswordStrength from './PasswordStrength.jsx';

function CustomForm() {
   // 🧠 Form State
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
   });

   //  ❌ validation error 
   const [errors, setErrors] = useState({});

   // Handle a change in any input
   function handleChange(e) {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
   }

   // simple Validation
   function Validate() {
      const newError = {};

      if(!formData.name.trim()) newError.name = "Name is Required";

      if(!formData.email.trim()) newError.email = "Email is Required";
      else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newError.email = "Invalid email format";

      if(formData.password.length < 6) newError.password = "Password must be 6+ characters"; 

      return newError;
   }

   function handleSubmit(e) {
      e.preventDefault();

      const validationErrors = Validate();
      if(Object.keys(validationErrors).length > 0) {
         setErrors(validationErrors);
         return;
      }

      // No error -> handle permission
      console.log("Form Submitted: " , formData);

      // Optionally reset
      setFormData({ name: "", email: "", password: "" });
      setErrors({});
   }


   return (
      <form
         onSubmit={handleSubmit}
         className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
      >
         <h2 className='text-2xl font-bold mb-4 text-center text-grey-800'> 
            Register
         </h2>

         <InputField 
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name} 
         />

         <InputField 
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email} 
         />

         <InputField 
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
         />

         <PasswordStrength password={formData.password}/>

         <button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md'
         >
            Submit
         </button>
      </form>
   )
}

export default CustomForm;