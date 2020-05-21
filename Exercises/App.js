class Message extends React.Component {
  state = {
    btnText: "Ukryj",
  };

  handelTextChange = () => {
    this.setState({
      btnText: "Pokaż",
      className: "hidden",
    });
  };
  render() {
    return (
      <>
        <button onClick={this.handelTextChange}>{this.state.btnText}</button>
        <h1 className={this.state.className}>Tutaj jest jakiś tekst.</h1>
      </>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));
