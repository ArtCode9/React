import { forwardRef , useImperativeHandle, useRef} from 'react';

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {

   const dialog =  useRef();

   useImperativeHandle(ref, () => {
      return {
         open() {
            dialog.current.showModal();
         }
      };
   });

   return (
      <dialog ref={dialog} className="result-modal">
         <h2>You {result}</h2>
         <p>
            The target time was <strong>{targetTime} seconds.</strong>
         </p>
         <p>
            You stopped the timer with <strong>X seconds left.</strong>
         </p>
         <form method="dialog">
            <button>Close</button>    
         </form>
      </dialog>
   );
});

export default ResultModal;

// The open after className="result-modal" make visible this dialog it is open attribute
// The open delete after add forwardRef  from react and if i did not delete it all the modal belong to all 
//  section open before i interact with anything
