import React, { Component, Fragment } from '@alipay/bigfish/react'
import './index.less'

class App extends Component {
  state = {
    value: 'props',
  }

  componentDidMount() {
    this.setState({
      value: 'newProps',
    })
  }

  render() {
    return (<Fragment>
      <Children {...this.state} />
    </Fragment>)
  }
}

class Children extends Component {
  state = {}

  // 更新前获取快照
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return {
      prevProps, prevState
    }
  }

  // 更新函数增加参数
  componentDidUpdate(_, __, snapshot) {
    console.log(snapshot)
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props, state)
    if (props.value !== state.value) {
      return {
        value: props.value
      }
    } 
    return props
  }

  render() {
    return (<div>
      <div>{this.state.value}</div>
    </div>)
  }
}

export default App
