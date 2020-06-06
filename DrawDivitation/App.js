const divitations = [
  "Miłego dnia",
  "Dzisiaj spotkasz kogoś ciekawego",
  "Przed Tobą wielki sukces",
];

class DrawDivitation extends React.Component {
  state = {
    drawed: "",
    input: "",
  };

  draw = () => {
    const drawed = this.props.divitations[
      Math.floor(Math.random() * divitations.length)
    ];
    this.setState({
      drawed: drawed,
    });
  };

  add = () => {
    this.props.divitations.push(this.state.input);

    this.setState({
      input: "",
    });
  };

  handleInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.draw}>Zobacz wróżbę</button>
        <br />
        <input
          type="text"
          onChange={this.handleInput}
          value={this.state.input}
        />
        <br />
        <button onClick={this.add}>Dodaj wróżbę</button>
        <br />
        <h3>{this.state.drawed}</h3>
      </>
    );
  }
}

ReactDOM.render(
  <DrawDivitation divitations={divitations} />,
  document.getElementById("root")
);
