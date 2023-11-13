import React from "react"

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary"
import Counter from "../components/Counter/Counter"

const Sample1 = () => {

  return (
    <div className='sample--first'>
      {/* 각각 개별로 ErrorBoundary가 적용이 된다. */}
      {/* ErrorBoundary는 현재 child에 적용된 컴포넌트에 적용되고, 가장 가까운 ErrorBoundary를 만나게 되면 상위로 더 이상 에러가 전달되지 않는다 */}
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
