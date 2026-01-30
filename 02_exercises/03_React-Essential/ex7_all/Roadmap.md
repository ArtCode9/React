# Roadmap (What We’ll Build Step-by-Step)
## Phase 1 – Foundations

1 - React project setup (Vite)

2 - JSX & component mindset

3 - Folder structure

4 - First components

## Phase 2 – Core React

5 - State (useState)

6 - Props & component communication

7 - Events & forms

8 - Lists & keys

## Phase 3 – Intermediate Concepts

9 - Refs (useRef)

10 - Focus management

11 - Conditional UI

12 - LocalStorage persistence

## Phase 4 – Clean Code

13 - Component refactoring

14 - Reusable UI components

15 - Simple architecture rules

-----------------------------
🧠 React Rule #2

```Data flows down. Events flow up.```

🧠 React Rule #3 (Critical)

``` State lives in the closest common parent that needs it.```

🧠 React Rule #4

```Never mutate state directly. Always replace it.```

Example:

```
Wrong: 
   tasks.push(newTask)

Right: 
   setTasks([...tasks, newTasks])
```

🧠 React Rule #5 (Very Important)

```If two components need to affect the same data, the state must move up.```

🧠 React Rule #6

```Components should either manage state or display UI — not both if avoidable.```

