class Message extends React.Component {
  state = {
    isActive: true,
  };

  handelTextChange = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.handelTextChange}>
          {this.state.isActive ? "Ukryj" : "Pokaż"}
        </button>
        <h1 className={this.state.isActive ? "" : "hidden"}>
          Tutaj jest jakiś tekst.
        </h1>
      </>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));
