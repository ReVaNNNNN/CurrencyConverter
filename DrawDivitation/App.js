class DrawDivitation extends React.Component {

  state = {
    drawed: '',
    inputValue: '',
    devotions: [
      'It will be your lucky day !',
      'You\'ll be rich soon !',
      'Your live will be happy and it will last over 100 years old !'
    ]
  }

  handleDraw = () => {
    let index = Math.floor(Math.random() * this.state.devotions.length);
    
    this.setState({
      drawed: this.state.devotions[index]
    })
  }

  addNewDevotion = () => {
    const devotions = this.state.devotions.concat(this.state.inputValue);

    this.setState({
      devotions,
      inputValue: '',
    })
  }

  updateInputValue = e => {
    this.setState({
      inputValue: e.target.value
    });
  }

  render () {
    return (
    <>
      <button onClick={this.handleDraw}>Losuj</button>
      <br/>
      <input value={this.state.inputValue} onChange={this.updateInputValue}/> 
      <br/>
      <button onClick={this.addNewDevotion}>Dodaj wróżbę</button>
      <br/>
      <br/>
      <p>{this.state.drawed}</p>
    </>
    )
  }
}

ReactDOM.render(<DrawDivitation />, document.getElementById('root'))