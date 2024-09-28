import React, { useState } from 'react'

function Counter() {
    let [count, setCount] = useState(0);

    let incSount = () => {
        setCount(count + 1);
        console.log(count);
    }

  return (
    <div>
      <h3>Count = {count} </h3>
      <button onClick={incSount}>Increase Count</button>
    </div>
  )
}

export default Counter
