class App extends React.Component {
  state = {
    result: 1,
    ratio: 2
  }

  handleMultiply = () => {
    this.setState((state) => ({
      result: state.result * state.ratio
    }))
  }

  componentDidUpdate() {
    if(this.state.result > 1000 && this.state.ratio === 2) {
      this.setState({
        ratio: 0.5
      })
    } else if(this.state.result < 1&& this.state.ratio === 0.5) {
      this.setState({
        ratio: 2
      })
    }
  }
 render() {
   return (
    <div>
      <p>Kalkulator mnoży przez dwa, jeśli suma jest mniejsza niż 1000. Po przekroceniu 1000 Kalkulator
      mnoży przez 0.5 aż osiągnie sumę mniejszą niż 1. Wtedy ponownie mnoży przez dwa.</p>
      <button onClick={this.handleMultiply}>
        Pomnóż przez {this.state.ratio}  
      </button>
      <h1>Wynik: {this.state.result}</h1>
    </div>
   );
 }
}

ReactDOM.render(<App />, document.getElementById("root"));
