import React from "react"

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary"
import Counter from "../components/Counter/Counter"

const Sample1 = () => {

  return (
    <div className='sample--first'>
      <div>
        <h3>first counter</h3>
        <ErrorBoundary>
          <Counter />
        </ErrorBoundary>
      </div>
      <div>
        <h3>second counter</h3>
        <ErrorBoundary>
          <Counter />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default Sample1
