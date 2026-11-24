import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
import Parent from "./component/Parent.jsx";
import Football from "./component/Events.jsx";
import GoalCount from "./component/Conditional.jsx";
import ListMap from "./component/ListMap.jsx";
import MyForm from "./component/Forms.jsx";
import MyFormTwo from "./component/UseState.jsx";
import MyFormThree from "./component/SubmitForm.jsx";
import FormTextarea from "./component/Textarea.jsx";
import SelectMy from "./component/Select.jsx";
import MultipleInput from "./component/MultipleInputs.jsx";
import CheckBox from "./component/CheckBox.jsx";
import RadioSection from "./component/Radio.jsx";
import MyAppPortal from "./component/Portal.jsx";
import BubblingPortal from "./component/BubblingProtal.jsx";
import SuspenseSection from "./component/Suspense.jsx";
import LazyLoading from "./component/SuspenseLazyLoading.jsx";
import CssModules from "./component/CssModules.jsx";
import CssInJs from "./component/CssInJs.jsx";
import CssInJsProps from "./component/CssInJsProps.jsx";
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Contact from './component/Contact.jsx';
import Products from './component/Products.jsx';
import CarProducts from './component/CarProducts.jsx';
import BikeProducts from './component/BikeProducts.jsx';

const carinfo = {
  name: "Chevy",
  model: "Muscle",
  color: "black",
  year: 1979
};


const booksi = ["alt1", "alt2",];

function App() {
  return (
   <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" | "}
        <Link to="/about">About</Link> |{" | "}
        <Link to="/contact">Contact</Link> {" | "}
        <Link to="/Products">Products</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Products" element={<Products />}>
          <Route path="CarProducts" element={<CarProducts />} />
          <Route path="BikeProducts" element={<BikeProducts />} />
        </Route>
      </Routes>
      
    <div className="App">
      <h1>Hello World !!!!</h1>       
      <CssInJsProps />
      <CssInJs />
      <CssModules />
      <LazyLoading />
      <SuspenseSection />
      <BubblingPortal />
      <RadioSection />
      <MyAppPortal />
      <MultipleInput />
      <CheckBox />
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
      <Parent />
      <Football />
      <GoalCount isGoal={true}/>
      <hr></hr>
      <hr></hr>
      <ListMap />
      <MyForm />
      <MyFormTwo />
      <MyFormThree />
      <FormTextarea />
      <SelectMy />
    </div>
   </BrowserRouter>  
  )
}

export default App;