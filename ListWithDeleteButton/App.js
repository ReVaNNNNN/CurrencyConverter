const Person = (props) =>  {
  return (
    <li>
      <span>{props.name}</span>
      <button>Usuń</button>
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

  handleDelete = () => {
    console.log('Usuwanie');
  }

  render() {
    return(
      <>
        <ul>
          {this.state.people.map(person => 
            <Person key={person.id} name={person.name} delete={this.handleDelete}/>)
          }
        </ul>
      </>
    )
  }
}

ReactDOM.render(<PeopleList />, document.getElementById('root'))