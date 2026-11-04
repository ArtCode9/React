const myElement = (
    <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
    <li>Love React</li>
    <li>COOOL JSX things</li>
  </ul>
);

function SampleJsx () {
   const brand = "Ford";
   const model = "Mustang";
   return (
      <> 
         <p>Write from inside `curly braced`</p>
         <hr></hr>
         {myElement}
         <p>Also i love {brand} cars and must {model}</p>
         <hr></hr>
      </>
   )
}

export default SampleJsx;