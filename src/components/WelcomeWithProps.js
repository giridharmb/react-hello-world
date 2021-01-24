import React from 'react';
import {Component} from 'react';

class WelcomeWithProps  extends Component {
  render() {
    return <h5>Class Component : Welcome {this.props.name}</h5>
  }
}

export default WelcomeWithProps;
