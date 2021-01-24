import React from 'react';
import {Component} from 'react';

class WelcomeDestructuringClass  extends Component {
  render() {
    const {name, age} = this.props;
    // const {state1, state2} = this.state; // if you are using states
    return <h5>Class Component : Destructuring : Name : {name}, Age: {age}</h5>
  }
}

export default WelcomeDestructuringClass;
