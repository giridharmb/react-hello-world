import React from 'react'

const FunctionClick = () => {
  function clickHandler() {
    console.log("button clicked")
  }
  
  return (
    <div>
      <hr/>
      <button onClick={clickHandler}>Func-Click</button>
    </div>
  )
}

export default FunctionClick
