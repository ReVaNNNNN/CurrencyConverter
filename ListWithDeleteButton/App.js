const Person = (props) => {
  return (
    <li>
      {props.name}
      <br />
      <button onClick={props.delete}>Usuń</button>
      <br />
      <br />
    </li>
  );
};

class List extends React.Component {
  state = {
    people: [
      {
        id: 1,
        name: "Kamil",
      },
      {
        id: 2,
        name: "Piotr",
      },
      {
        id: 3,
        name: "Adam",
      },
      {
        id: 4,
        name: "Grzegorz",
      },
    ],
  };

  handleDeletePerson = (id) => {
    const people = this.state.people.filter((person) => person.id != id);

    this.setState({
      people,
    });
  };

  render() {
    const people = this.state.people.map((person) => (
      <Person
        key={person.id}
        name={person.name}
        delete={() => this.handleDeletePerson(person.id)}
      />
    ));
    return <ul>{people}</ul>;
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
