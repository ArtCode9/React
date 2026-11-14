import SampleJsx from "./component/SampleJsx.jsx";
import Object from "./component/Object.jsx";
import IfStatement from "./component/IfStatement.jsx";
import ComponentOne from "./component/Component.jsx";
import Car from "./component/Class.jsx";
import CarGar from "./component/StateObj.jsx";


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
    </div>
  )
}

export default App;