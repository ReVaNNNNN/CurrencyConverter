class Form extends React.Component {
  state = {
    city: "Kraków",
    description: "",
    isLiked: true,
  };

  handleCityChange = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  handleIsLiked = () => {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  };

  render() {
    return (
      <div>
        <label>
          Podaj miasto
          <input
            value={this.state.city}
            onChange={this.handleCityChange}
            type="text"
          />
        </label>
        <br />
        <label>
          Napisz coś o tym mieście
          <textarea
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          ></textarea>
        </label>
        <br />
        <label>
          Czy lubisz to miasto ?
          <input
            type="checkbox"
            checked={this.state.isLiked}
            onChange={this.handleIsLiked}
          />
        </label>
        <br />
        <label>
          Ile razy byłeś w tym mieście ?
          <select>
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
            <option value="more">Więcek</option>
          </select>
        </label>
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
