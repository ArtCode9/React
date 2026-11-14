function Daughter(props) {
   const {brand = 'hitachi', model = 'mn99'} = props;
   return (
      <div style={{background: 'lightblue'}}>
         <h2>Daughter</h2>
         <div>{props.children} {brand} {model}</div>
      </div>
   );
}

export default Daughter