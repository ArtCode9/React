
function CarShop(props) {
  console.log("Received props:", props);

  return (
    <>
      <hr></hr>
         <h2>My {props.pcarInfo.name} {props.pcarInfo.model}!</h2>
         <p>
         It is {props.pcarInfo.color} and it is from {props.pcarInfo.year}.
         </p>
      <hr></hr>
    </>
  );
}

export default CarShop;
