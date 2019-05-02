import React, { Component } from '@alipay/bigfish/react'
import { createPortal } from '@alipay/bigfish/react-dom'
import style from './index.less'

class HandleError extends Component {   
  state = {}
  
  // 1.如果render过程中有报错，执行，如果render或者子组件任何生命周期出错，改变状态，重新渲染
  // 最外层组件，外面再包一层HandError，只用来包装
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidCatch(error, info) {   
    // 打日志
    console.log('error', error)
    console.log('componentStack', info.componentStack)
    // 打印日志
  }
  
  render() {
    if(this.state.error) {
      return this.state.error
    }
    return this.props.children;   
  } 
}

// 3. 字符串渲染
const StringRender = () => '渲染字符串'

// 4. no key渲染，因为编译期并不知道有多少个children
const WrapperRender = (props) => props.children

const NoKeyRender = () => (<WrapperRender>
  <div>渲染无key1</div>
  <div>渲染无key2</div>
  <div>渲染无key3</div>
</WrapperRender>)


// 5. hoc不必再包装一层
const HOCRender = HOCComponent => (props) => (<HOCComponent {...props} />)

class ArrayRender extends Component {
  componentDidMount() {
    // 2. 测试componentDidCatch
    // throw new Error('I crashed!');
  }

  // 1.数组渲染
  render() {
    const HOC = HOCRender(WrapperRender)
    return [
      <div key='a'>渲染数组1</div>,
      <div key='b'>渲染数组2</div>,
      <div key='c'>渲染数组3</div>,
      [
        <div key='a'>数组嵌套4</div>,
        <div key='b'>数组嵌套5</div>,
      ],
      <StringRender key='e' />,
      <NoKeyRender key='f' />,
      <HOC key='h'>HOC</HOC>,
    ];
  }
}

// 3. 弹框
class Dialog extends Component {
  constructor(props) {
    super(props);

    this.node = document.createElement('div');
    this.node.className = style.dialog
    document.body.appendChild(this.node);
  }

  render() {
    return createPortal(
      <div>
        弹框
      </div>,
      this.node
    );
  }
}


export default () => (<HandleError>
  <Dialog />
  <ArrayRender />
</HandleError>)
