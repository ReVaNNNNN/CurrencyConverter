const Person = (props) =>  {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={props.delete}>Usuń</button>
    </li>
  )
}

class PeopleList extends React.Component {

  state = {
    people: [
      {
        id: 1,
        name: 'Asia'
      },
      {
        id: 2,
        name: 'Ania'
      },
      {
        id: 3,
        name: 'Basia'
      },
      {
        id: 4,
        name: 'Jolka'
      }
    ]
  }

  handleDelete (id) {
    const people = [...this.state.people];
    const index = people.findIndex(person => person.id === id);
    people.splice(index, 1);
    this.setState({
      people
    })
  }

  render() {
    return(
      <>
        <ul>
          {this.state.people.map(person => 
            <Person key={person.id} name={person.name} delete={this.handleDelete.bind(this, person.id)}/>)
          }
        </ul>
      </>
    )
  }
}

ReactDOM.render(<PeopleList />, document.getElementById('root'))