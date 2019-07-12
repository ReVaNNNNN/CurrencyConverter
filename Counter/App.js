class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState(prevState => ({
      counter: ++prevState.counter
    }))
  }

  decrement = () => {
    this.setState(prevState => ({
      counter: --prevState.counter
    }))
  }

  render() {
    return(
      <>
        <p>{this.state.counter}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'))