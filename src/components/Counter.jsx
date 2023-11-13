import React, { useState, useEffect } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count === 2) {
      throw new Error('counter is equal to 2')
    }
  }, [count])

  const handleCountPlusClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      {count}
      <button onClick={handleCountPlusClick}>
        +
      </button>
    </>
  )
}

export default Counter
