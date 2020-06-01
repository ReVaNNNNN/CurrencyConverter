const data = {
  users: [
    {
      id: 1,
      age: 27,
      name: "Kamil",
      sex: "male",
    },
    {
      id: 2,
      age: 45,
      name: "Łukasz",
      sex: "male",
    },
    {
      id: 3,
      age: 16,
      name: "Joanna",
      sex: "female",
    },
    {
      id: 4,
      age: 51,
      name: "Janusz",
      sex: "male",
    },
  ],
};

const Item = ({ user }) => (
  <div className="userInfo">
    <h3>{user.name}</h3>
    <p>Wiek: {user.age}</p>
    <p>Płeć: {user.sex}</p>
  </div>
);

class ListItems extends React.Component {
  state = {
    type: "all",
  };

  handleSwitchType = (type) => {
    this.setState({
      type: type,
    });
  };

  userList = () => {
    let users = this.props.data.users;

    if (this.state.type == "female") {
      users.filter((user) => user.sex === "female");
      return users.map((user) => <Item key={user.id} user={user} />);
    } else if (this.state.type == "male") {
      users.filter((user) => user.sex === "male");
      return users.map((user) => <Item key={user.id} user={user} />);
    } else {
      return users.map((user) => <Item key={user.id} user={user} />);
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.handleSwitchType.bind(this, "all")}>
          Wszyscy
        </button>
        <button onClick={this.handleSwitchType.bind(this, "male")}>
          Mężczyźni
        </button>
        <button onClick={this.handleSwitchType.bind(this, "female")}>
          Kobiety
        </button>
        {this.userList()}
      </div>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
