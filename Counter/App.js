class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  handleAdd = () => {
    this.setState(prevState => ({
      counter: ++prevState.counter
    }))
  }

  handleSubstract = () => {
    this.setState(prevState => ({
      counter: --prevState.counter
    }))
  }

  render() {
    return(
      <>
        <p>{this.state.counter}</p>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleSubstract}>-</button>
      </>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'))