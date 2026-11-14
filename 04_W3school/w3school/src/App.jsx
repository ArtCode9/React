import SampleJsx from "./component/SampleJsx.jsx";
import Object from "./component/Object.jsx";
import IfStatement from "./component/IfStatement.jsx";
import ComponentOne from "./component/Component.jsx";
import Car from "./component/Class.jsx";
import CarGar from "./component/StateObj.jsx";
import Books from "./component/PropsR.jsx";
import CarShop from "./component/ObjectProps.jsx";
import BooksShelf from "./component/ArrayProps.jsx";
import Paint from "./component/DestructuringProp.jsx";

const carinfo = {
  name: "Chevy",
  model: "Muscle",
  color: "black",
  year: 1979
};

const booksi = ["alt1", "alt2",];

function App() {
  return (
    <div className="App">
      <h1>Hello World !!!!</h1>      
      <SampleJsx />
      <Object />
      <IfStatement />
      <ComponentOne part="one props ♾️"/>
      <ComponentOne part="use with dif props 🍕🍕"/>
      <Car model="BMW"/>
      <CarGar />
      <Books name="Bright night" year={1987} author="Dastayofski"/>
      <CarShop pcarInfo={carinfo}/> 
      <BooksShelf bookshelf={booksi}/>
      <Paint number={1234} color="red" brand="castle"/>
    </div>
  )
}

export default App;