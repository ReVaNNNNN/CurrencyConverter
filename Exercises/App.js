const PositiveMessage = () => <p> Możesz obejrzeć film. Zapraszamy !</p>;

const NegativeMessage = () => (
  <p> Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>
);

class App extends React.Component {
  state = {
    isConfirmed: false,
  };

  handleCheckboxChange = () => {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  };

  render() {
    return (
      <>
        <h1>Kup blet na horror roku!</h1>
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckboxChange}
            checked={this.state.isConfirmed}
          />{" "}
          Mam co najmniej 16 lat
        </label>
        {this.state.isConfirmed ? <PositiveMessage /> : <NegativeMessage />}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
