// 함수형 컴포넌트에 없는 기능을 추가하기 위해 클래스형 컴포넌트로 선언합니다.
import React from "react"

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
      errorMessage: '',
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error.toString()
    }
  }

  componentDidCatch(error, info) {
    console.log('handle side-effect in here')
    console.log(info)
  }

  render() {
    // hasError가 true일 때만 해당 내용이 렌더링됩니다.
    if (this.state.hasError) {
      return (
        <div>
          Something went wrong...
          <p>{this.state.errorMessage}</p>
          <button onClick={() => this.setState({ hasError: false })}>reset error</button>
        </div>
      )
    }
    // 에러가 없는 경우 원래 children을 렌더링합니다.
    return this.props.children
  }
}