import React from "react";

class Car extends React.Component {
   constructor(props) {
      super(props);
   }
   render () {
      return <h2>I have a {this.props.model}!</h2>
   }
}

export default Car;