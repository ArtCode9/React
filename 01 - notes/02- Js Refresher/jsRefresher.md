## JavaScript Modules & defer Attribute Guide

 🟢
      The 'defer' attribute tells the browser to download the script
      while parsing HTML, but execute it only after the document
      has been fully parsed. Deferred scripts preserve execution order
      and run before DOMContentLoaded.

      Placing scripts at the end of <body> achieves a similar effect,
      but 'defer' is the preferred modern approach.

      "type" attribute tell this file as an ES Module not classic JS
      Once You do this several rules change:
      1️⃣: Module scripts behave as if defer is already applied
         🔻HTML is parsed first
         🔻the module executes after parsing
         🔻Execution happens before DOMContentLoaded
         🔻You do not need defer
      adding defer here is redundant(but harmless)
      ---------------------------------------------------------
      2️⃣: You can use import nad export
         classic js come syntax error ❌  
         but module script works:  ✅ import { sum } from './math.js';
      ---------------------------------------------------------
      3️⃣: Scope is isolated (No Global Pollution)
         🔻Variable are scoped to the module
         🔻Accidental Globals disappear 
         🔻Cleaner , safer code
      if you want something global:
            window.myGlobal = 'value';
      ---------------------------------------------------------
      4️⃣: Module are always in 'strict mode';
      ---------------------------------------------------------
      5️⃣: file path must be explicit:
               import './utils.js'; ✅
               import 'utils.js';   ❌
         🔻path must be relative (./  ,  ../)  or absolute (/)
         🔻No implicit resolution
         🔻No Node-style module lookup in the browser
      --------------------------------------------------------
      6️⃣: Modules Load Asynchronously (With Order Guarantees)
          🔻Modules are fetched asynchronously
          🔻Dependencies load before the parent module executes
          🔻Execution order is guaranteed based on imports
      🟠This solves a whole class of “script order” bugs.
      ---------------------------------------------------------
      7️⃣: type="module" vs defer vs classic scripts
      | Feature         | Classic      | `defer`      | `type="module"`  |
      | --------------- | ------------ | ------------ | ---------------- |
      | DOM parsing     | Blocks       | No           | No               |
      | Imports         | ❌            | ❌         | ✅              |
      | Scope isolation | ❌            | ❌         | ✅              |   
      | Strict mode     | ❌            | ❌         | ✅              |
      | Execution order | Script order | Script order | Dependency order |
      -----------------------------------------------------------
      8️⃣: One Gotcha: CORS Rules Apply
      Modules follow same-origin rules.
      this works:  http://loaclhost/app.js
      this often fails:  file:///app.js
      use local server :
         npx sever
         python -m http.server
      ----------------------------------------------------------
      9️⃣: When should You Use type="module" ?
         use it when :
            🔻You want clean maintainable code
            🔻Your app has  multiple files
            🔻You plan to use modern tooling(React, vite, etc)
         Avoid it only if :
             🔻you must support very old browsers
             🔻You are writing a single tiny script
      ------------------------------------------------------

🚨 In React Project You will almost never add script tags
      to your HTML file on your own.
   🟠 because react projects almost always use a build process
      which as part of that build process, injects these script tags
      into the HTML code for you.

---------------------------------------------------------


React Project use a build process which simply means 
the code you write is not the code that gets executed 
(like this) in the browser. instead the code you write 
is transformed behind the scenes before it is handed
off to the browser.

-----------------------------------------------------------

#### React Project Use a Build Process

1️⃣. Raw , unprocessed React code ***won't execute*** in the browser.
   🔻JSX is not a default javascript feature
2️⃣. in addition the code would not be optimized for production(e.g, not minified)

➡️ React project require a build process that transforms your code
    create-react-app, vite, etc . give you such a build process(no custom setup or tweaking needed)


-----------------

React will actually take all your imports and exports
and basically merge all these separate files that you have 
during development into one big file or a bunch of big files,
which are then imported with the old school syntax in the right order.


