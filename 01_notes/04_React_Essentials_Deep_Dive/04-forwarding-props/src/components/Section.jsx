export default function Section ({ title, children, ...props }) {
   return (
         <section {...props}>
            <h2>{title}</h2>
            {children}
         </section>
   );
}

//  ...props 
//  that might be set on our custom section  components here will be forwarded 
//  to this built-in section  element