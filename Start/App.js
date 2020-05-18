class App extends React.Component {
  state = {
    text: "",
  };

  handleClick = () => {
    this.setState({
      text: this.state.text + "A",
    });
  };

  handleClear = () => {
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Dodaj "A"</button>
        <h1>{this.state.text}</h1>
        <button onClick={this.handleClear}>Wyczyść"</button>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
