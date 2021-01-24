import React from 'react';

// function Greet() {
//   return <h1>Hello Giridhar</h1>
// }

const Greet = props => {
    console.log(props);
    return (
        <div>
          <h3>Hello {props.name}, whose age is {props.age}</h3>
          {props.children}
        </div>
    )
}

export default Greet;
