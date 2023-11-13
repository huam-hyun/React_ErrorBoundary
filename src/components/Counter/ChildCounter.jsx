import React, { useState, useEffect } from "react"

import './counter.css'

const ChildCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count === 2) {
      throw new Error('counter is equal to 2')
    }
  }, [count])

  const handleCountPlusClick = () => {
    setCount(count + 1)
  }

  const handleCountMinusClick = () => {
    setCount(count - 1)
  }

  return (
    <div className='counter'>
      <button
        className='counter__button'
        onClick={handleCountPlusClick}
      >
        +
      </button>
      {count}
      <button
        className='counter__button'
        onClick={handleCountMinusClick}
      >
        -
      </button>
    </div>
  )
}

export default ChildCounter
