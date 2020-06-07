const Person = (props) => {
  return (
    <li>
      {props.name}
      <br />
      <button>Usuń</button>
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

  handleDeletePerson = () => {};

  render() {
    const people = this.state.people.map((person) => (
      <Person name={person.name} />
    ));
    return <ul>{people}</ul>;
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
