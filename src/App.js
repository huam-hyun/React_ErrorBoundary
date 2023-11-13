import Sample1 from './sample/Sample1'
import Sample2 from './sample/Sample2'

import './sample/sample.css'

function App() {
  return (
    <div className='content'>
      <h2>Test ErrorBoundary</h2>
      <hr />
      {/* 카운터 2개 개별로 ErrorBoundary를 적용 */}
      {/* 에러가 발생해도 각각 컴포넌트가 에러 컴포넌트로 렌더링된다 */}
      <Sample1 />
      <hr />
      {/* 카운터 2개를 하나의 ErrorBoundary를 적용 */}
      {/* 둘 중 하나만 에러가 발생해도 공통적으로 에러 컴포넌트가 렌더링된다 */}
      <Sample2 />
      <hr />
    </div>
  )
}

export default App
