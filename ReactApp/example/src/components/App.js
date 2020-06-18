import React, { Component } from "react";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

class App extends Component {
  state = {
    users: [],
  };

  url = "https://randomuser.me/api/?results=5";

  handleClickFetchusers = () => {
    console.log("click click");
  };

  getUsers = () => {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          users: data.results,
        })
      );
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <>
        <ButtonFetchUsers click={this.handleClickFetchusers} />
        <UsersList users={this.state.users} />
      </>
    );
  }
}

export default App;
