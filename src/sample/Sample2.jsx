import React from "react"

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary"
import Counter from "../components/Counter/Counter"

const Sample2 = () => {

  return (
    <div className='sample'>
      <ErrorBoundary>
        <div>
          <h3>first counter</h3>
          <Counter />
        </div>
        <div>
          <h3>second counter</h3>
          <Counter />
        </div>
      </ErrorBoundary>
    </div>
  )
}

export default Sample2
