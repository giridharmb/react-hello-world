import React from 'react';

// function Greet() {
//   return <h1>Hello Giridhar</h1>
// }

const GreetDS = ({name, age}) => {
    return (
        <div>
          <h3>Hello {name}, whose age is {age}</h3>
        </div>
    )
}

export default GreetDS;
