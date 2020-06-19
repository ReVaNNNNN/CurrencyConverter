import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    pass: "",
    accept: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    const value = e.target.value;
    const checked = e.target.checked;
    this.setState({
      [name]: value,
    });

    if (type === "checkbox") {
      this.setState({
        [name]: checked,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="user">
            Twoje imię:
            <input
              id="user"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="email">
            Twoje email:
            <input
              id="email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="password">
            Twoje hasło:
            <input
              id="password"
              type="password"
              name="pass"
              value={this.state.pass}
              onChange={this.pass}
            />
          </label>

          <label htmlFor="accept">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            />{" "}
            Wyrażam zgodę
          </label>

          <button>Zapisz się</button>
        </form>
      </div>
    );
  }
}

export default App;
