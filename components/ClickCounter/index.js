import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="para">Click the button to increase the count</p>
        <div>
          <button className="button" onClick={this.onIncrease} type="button">
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
