class App extends React.Component {
  state = {
    text: "",
  };

  handleInputChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleReset = () => {
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <>
        <input onChange={this.handleInputChange.bind(this)}></input>
        <button onClick={this.handleReset}>Reset</button>
        <h1 className="title">{this.state.text}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
