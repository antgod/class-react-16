import React, { Component } from '@alipay/bigfish/react'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    const Children = this.props.children
    return (<div onClick={this.increment}>
      {/* {this.props.children(this.state)} */}
      <Children state={this.state} />
    </div>);
  }
}

class App extends Component {
  render() {
    return (
      <Counter>
        {({ state }) => (
          <div>
            <h1>The count is: {state.count}</h1>
          </div>
        )}
      </Counter>
    );
  }
}

export default () => (<App />)
