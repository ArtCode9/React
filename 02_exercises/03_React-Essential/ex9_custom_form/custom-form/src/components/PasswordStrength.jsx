import React from "react";

function getStrength(password) {
   let score = 0;

   if(password.length >= 6) score++;
   if(/[A-Z]/.test(password)) score++;
   if(/[0-9]/.test(password)) score++;
   if(/[^A-Za-z0-9]/.test(password)) score++;

   if(score <= 1) return { label: "Weak", percent: 25, color: "bg-red-500"};
   if(score === 2) return { label: "Medium", percent: 50, color: "bg-yellow-500"};
   if(score === 3) return { label: "Good", percent: 75, color: "bg-blue-500"};

   return { label: "Strong", percent: 100, color: "bg-green-500"};
}

function PasswordStrength({ password }) {
   if(!password) return null;

   const strength = getStrength(password);

   return (
      <div className="mt-2">
         <div className="flex justify-between text-sm mb-1">
            <span>Password Strength</span>
            <span className="font-medium">{strength.label}</span>
         </div>

          <div className="w-full h-2 bg-gray-200 rounded">
            <div
               className={`h-2 rounded transition-all ${strength.color}`}
               style={{ width: `${strength.percent}%` }}
            />
          </div>
      </div>
   )
}

export default PasswordStrength;