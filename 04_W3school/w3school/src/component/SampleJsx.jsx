const myElement = (
    <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
    <li>Love React</li>
    <li>COOOL JSX things</li>
  </ul>
);

function kstohp(kw) {
      return kw * 1.96;
}

function SampleJsx () {
   const brand = "Ford";
   const model = "Mustang";
   const hp = 218 * 1.36;

   return (
      <> 
         <p>Write from inside `curly braced`</p>
         <hr></hr>
         {myElement}
         <p>Also i love {brand} cars and must {model}</p>
         <p>Also the result of 2 + 2 is : { 2 + 2 }</p>
         <p>My car has {hp} horsepower</p>
         <p>Also can call function expression inside JSX </p>
         <p>It has {kstohp(218)} horsepower</p>
         <hr></hr>
      </>
   )
}

export default SampleJsx;