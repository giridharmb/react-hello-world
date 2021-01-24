import React from 'react';

// function Greet() {
//   return <h1>Hello Giridhar</h1>
// }

const GreetDSFunc = (props) => {
    const {name, age} = props
    return (
        <div>
          <h3>Hello {name}, whose age is {age}</h3>
        </div>
    )
}

export default GreetDSFunc;
