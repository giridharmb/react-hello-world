import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  // never modify the state directly
  // use this.setState method always
  increment() {
    // this.setState({
    //   count: this.state.count+1
    // }, () => {
    //   console.log('callback value : ', this.state.count) // callback func
    // })

    // important - use previous state to increment correctly
    // if you use INCREMENT this.state.count by 5 times
    // react will automatically group all the 5 calls into one call
    // hence increment will not work properly,
    // as shown in below incrementLarger()
    this.setState( (prevState) => ({
      count: prevState.count + 1
    }))
    console.log('incremented value : ', this.state.count)
  }

  incrementLarger() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        <div><h3>Counter - {this.state.count}</h3></div>
        <button onClick={ () => this.incrementLarger() }>Increment</button>
      </div>

    )
  }
}
