import React, {Component} from 'react'
import PropTypes from 'prop-types'

class EventBind extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello'
    }

    /* Approach-3 : official approach */
    this.clickHandler3 = this.clickHandler3.bind(this);
  }

  /* Approach-1 : has performance issues */
  clickHandler1() {
    this.setState({
      message: 'GoodBye1'
    })
  }

  /* Approach-2 : easiest way */
  clickHandler2() {
    this.setState({
      message: 'GoodBye2'
    })
  }

  /* Approach-3 : recommended */
  clickHandler3() {
    this.setState({
      message: 'GoodBye3-official'
    })
  }

  /* Approach-4 : recommended : experimental */
  clickHandler4 = () => {
    this.setState({
      message: 'GoodBye4'
    })
  }

  render () {
    return (
      <div>
        <br/>
        <div>{this.state.message}</div>
        <br/>

        { /* Approach-1 */}
        <button onClick={this.clickHandler1.bind(this)}>BindClick1</button>

        &nbsp;&nbsp;&nbsp;
        { /* Approach-2 */}
        <button onClick={ () => this.clickHandler2() }>BindClick2</button>

        &nbsp;&nbsp;&nbsp;
        { /* Approach-3 : official approach */}
        <button onClick={ this.clickHandler3 }>BindClick3</button>

        &nbsp;&nbsp;&nbsp;
        { /* Approach-4 */}
        <button onClick={ this.clickHandler4 }>BindClick4</button>
      </div>
    )
  }
}

export default EventBind;
