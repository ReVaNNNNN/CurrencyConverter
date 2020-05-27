const PositiveMessage = () => <p> Możesz obejrzeć film. Zapraszamy !</p>;

const NegativeMessage = () => (
  <p> Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>
);

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  };

  handleCheckboxChange = () => {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isFormSubmitted: true,
    });
  };

  render() {
    return (
      <>
        <h1>Kup blet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            <input
              type="checkbox"
              onChange={this.handleCheckboxChange}
              checked={this.state.isConfirmed}
            />{" "}
            Mam co najmniej 16 lat
          </label>
          <button type="submit">Kup bilet</button>
        </form>
        {this.state.isConfirmed ? (
          this.state.isConfirmed ? (
            <PositiveMessage />
          ) : (
            <NegativeMessage />
          )
        ) : null}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
