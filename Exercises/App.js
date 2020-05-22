class Counter extends React.Component {
  state = {
    result: 0,
    clickCounter: 0,
  };

  handleChangeResult(operation) {
    if (operation == "add") {
      this.setState((prevState) => ({
        result: prevState.result + 1,
      }));
    } else if (operation == "sub") {
      this.setState((prevState) => ({
        result: prevState.result - 1,
      }));
    } else {
      this.setState({
        result: 0,
      });
    }

    this.setState((prevState) => ({
      clickCounter: prevState.clickCounter + 1,
    }));
  }

  render() {
    return (
      <>
        <button onClick={this.handleChangeResult.bind(this, "add")}>+1</button>
        <button onClick={this.handleChangeResult.bind(this, "sub")}>-1</button>
        <button onClick={this.handleChangeResult.bind(this, "reset")}>
          Reset
        </button>
        <h2>Liczba kliknięć: {this.state.clickCounter}</h2>
        <h2>Wynik: {this.state.result}</h2>
      </>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
