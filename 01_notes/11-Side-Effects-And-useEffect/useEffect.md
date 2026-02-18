# Dealing with Side Effects
keeping the UI Synchronized

- Understanding Side Effect and useEffect()
- Effects and Dependencies
- When not to use useEffect

------------------------------------------------
# What are "Side Effects"?
side effects are tasks that don't impact the current component render cycle.

so side effects not directly related to the task to the main goal of this component function.

------------------------------------------------
we can not use "useEffect" because we not allowed to use react hooks in nested functions, if statements or anything like that.

They must use directly in the root level of your components functions.
