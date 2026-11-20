/* 
Another common use of the Suspense component is when importing components with lazy loading:
in the last example of suspense we had to fake a delay of two seconds to see the loading  message.
A task like displaying three fruits from an array would be too fast to see the loading message at all.

But with lazy loading, we can import a component dynamically,
and it will display a loading message while it is loading, even if the task is very fast.

Lets first create an example WITHOUT using lazy loading, where we do not fake a two seconds delay:


*/
import { Suspense, lazy } from "react";


/*One Suspense component can wrap multiple lazy components:*/
const MyAppPortal = lazy(() => import('./Portal'));
const SelectMy2 = lazy(() => import('./Select'));

function LazyLoading() {
   return(
      <div>
         <Suspense fallback={<div>Wait beside lazy loading ........</div>}>
            <div style={{
               backgroundColor: 'blue',
               padding: '22px'
            }}>
            <MyAppPortal />
            <hr></hr>
            <SelectMy2 />
            </div>
         </Suspense>
      </div>
   );
}

export default LazyLoading

/*
   Example Explained :
      - Lazy() lets you load a components dynamically
      - Suspense shows a fallback while the component loads

*/