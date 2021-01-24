import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    // method-1

    let message
    if (this.state.isLoggedIn) {
      message = <div>Welcome Giri-1</div>
    } else {
      message = <div>Welcome Guest-1</div>
    }

    return <div>{message}</div>

    // method-2

    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>Welcome Giri-2</div>
    //   )
    // } else {
    //   return (
    //     <div>Welcome Guest-2</div>
    //   )
    // }

    // method-3

    // return this.state.isLoggedIn? (
    //   <div>Welcome-Giri-3</div>
    // ) : (
    //   <div>Welcome-Guest-3</div>

    //  method-4

    // return (
    //   this.state.isLoggedIn && <div>Welcome-Giri-3</div>
    // )
  }
}


export default UserGreeting
