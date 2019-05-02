import React from '@alipay/bigfish/react'
import './index.less'

const ThemeContext = React.createContext()

// Use a Provider to pass the current theme to the tree below.
// Any component can read it, no matter how deep it is.
// In this example, we're passing "dark" as the current value.
class App extends React.Component {
  setColor = (color) => {
    this.setState({
      color,
    })
  }

  state = {
    color: 'default',
    setColor: this.setColor,
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

// Assign a contextType to read the current theme context.
// React will find the closest theme Provider above and use its value.
// In this example, the current theme is "dark".
class ThemedButton extends React.Component {
  static contextType = ThemeContext

  render() {
    return (<>
      <ThemeContext.Consumer>
        {({ _, setColor }) => (<>
          <input onChange={e => setColor(e.target.value)} />
        </>)}
      </ThemeContext.Consumer>
      <div>
        当前颜色是：{this.context.color}
      </div>
    </>)  
  }
}

export default App
