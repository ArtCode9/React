import React from "react";

class CarGar extends React.Component {
   constructor (props) {
      super(props);
      this.state = {
         brand: "Ford",
         model: "Mustang",
         color: "red",
         year: 1969
      };
   }
   changeColor = () => {
      this.setState({color: "blue"});
   }
/* 👆👆👆👆
Always use the setState() method to change the state object,
it will ensure that the component knows its been updated and calls
the render() method (and all the other lifecycle methods).
*/
   render() {
      return (
         <div>
            <hr></hr>
            <h1>My {this.state.brand}</h1>
            <p>
               it is a {this.state.color}  `{this.state.model}`
               from {this.state.year}
            </p>
            <button
               type="button"
               onClick={this.changeColor}   
            >
               Change Color
            </button>
            <hr></hr>
         </div>
      );
   }
}

export default CarGar;

/* 

React Class Component State
React Class components have a built-in state object.

You might have noticed that we used state earlier in the component constructor section.

The state object is where you store property values that belongs to the component.

When the state object changes, the component re-renders.

The state object is initialized in the constructor:
Specify the state object in the constructor method:

The state object can contain as many properties as you like:

Using the state Object:
Refer to the state object anywhere in the component by using the this.state.propertyname syntax:
Refer to the state object in the render() method:
*/