/* 
React Suspense lets you display an alternative HTML while waiting for code or data load.
The alternative HTML can be a components, text or any valid content.

What is Suspense?
Suspense is a react feature that let's your components display an alternative HTML while waiting for load.
The most common use cases are:
   - Data Fetching with suspense-enabled frameworks
   - Loading components dynamically with `React.lazy()`
*/
import { Suspense } from "react";
import MyAppPortal from "./Portal";

function SuspenseSection() {
   return (
      <div>
         <Suspense fallback={<div>Loading.....</div>}>
            <MyAppPortal />
            <h2>load after waiting...</h2>
         </Suspense>
      </div>
   );
}

export default SuspenseSection