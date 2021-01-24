import React, { Component } from 'react'

export default class ClassClick extends Component {
  clickHandler() {
    console.log("clicked the button")
  }

  render() {
    return (
      <div>
        <br/>
        <button onClick={this.clickHandler}>Click-Me</button>
      </div>
    )
  }
}
