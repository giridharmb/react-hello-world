import React from 'react';

const HelloWithoutJSX = () => {
  return React.createElement(
    'div',
    {id: 'hello', className: 'dummyClass'},
    React.createElement(
      'h3',
      null,
      'Hello John'
    )
  );
}

export default HelloWithoutJSX;
