# Advanced Stat Management

beyond basic apps and Lifting Up State

   - The problem of shared state: Prop Drilling
   - Embracing Component Composition
   - Sharing State with context
   - Managing Complex State with Reducers

----------------------------------

## Prop Drilling 
Passing shared data through multiple components layers

-------------------------
one possible solution for this drilling problem is to embrace component composition.


##  1️⃣ Component Composition
Component composition is building UI by combining small components together instead of inheriting from them.

🧠 Mental Model

Components are LEGO blocks 🧱 You don’t extend blocks — you assemble them.


## 2️⃣ Prop Drilling
Prop drilling is passing props through multiple component levels just to reach a deeply nested child.

🧠 Mental Model

You pass a box 📦 through many people even though only the last person needs it.

## 3️⃣ How to Fix Prop Drilling
### ✅ Solution 1: Lift State Up (when shallow)
Move state closer to where it’s used.

### ✅ Solution 2: Context API (most common)

### ✅ Solution 3: Component Composition (smart design)

## 4️⃣ Composition vs Prop Drilling (Side-by-Side)

| Concept               | Purpose                                 |
| --------------------- | --------------------------------------- |
| Component Composition | Build UI by combining components        |
| Prop Drilling         | Passing data through unnecessary layers |
| Composition           | ✅ Recommended                           |
| Prop Drilling         | ⚠️ Avoid when deep                      |
| Fix Drilling          | Context / better composition            |

----------------------
🔒 Golden Rule

If a component only passes props and doesn’t use them, rethink your design.

--------------------------

# What is a Reducer ?
a reducer in react app and javascript programming in general is typically a function 
that reduce one or more complex values to a simpler one.

For Example: 
[5, 10, 100]  -----> 115