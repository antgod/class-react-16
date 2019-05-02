import React, { Component, Fragment, Suspense, memo, lazy } from '@alipay/bigfish/react'
import './index.less'

const OtherComponent = lazy(() => import('./component'))
const Comp = () => (<Suspense fallback={<div>Loading...</div>}>
  <OtherComponent />
</Suspense>)


class App extends Component {
  state = {
    children: 'default',
  }

  componentDidMount() {
    this.setState({
      children: 'default',
    })
  }

  render() {
    return (<Fragment>
      <MemoChildren {...this.state} />
      <Children {...this.state} />
      <Comp />
    </Fragment>)
  }
}

// 自动判断shouldComponentUpdate，只有属性有变化时候才会重新渲染
const MemoChildren = memo(props => {
  console.log('MemoChildren渲染函数')
  return <div>{props.children}</div>
});

const Children = props => {
  console.log('Children渲染函数')
  return <div>{props.children}</div>
};

export default App
