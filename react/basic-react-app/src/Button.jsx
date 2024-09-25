import React from 'react'

function Button() {
    function doSomething() {
        console.log("You clicked button");
    }
  return (
    <>
    <button onClick={doSomething}>Hello</button>
    </>
  )
}

export default Button
