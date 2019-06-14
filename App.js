const Cash = (props) => {
 const value = (props.cash / props.ratio).toFixed(2);

 return (
   <div> {props.title} {props.cash <= 0 ? "" : value} </div>
 )
}

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
  }

  currencies = [
    {
      id: 1,
      name: 'dollar',
      ratio: 3.6,
      title: 'Wartość w dolarach:'
    },
    {
      id: 2,
      name: 'euro',
      ratio: 4.2,
      title: 'Wartość w euro:'
    },
    {
      id: 3,
      name: 'pound',
      ratio: 4.95,
      title: 'Wartość w funtach:'
    },
  ];

  handleChange = e => {
    this.setState({
      amount: e.target.value
    })
  }

  render() {
    const {amount} = this.state;

    const converters = this.currencies.map(currency => (
        <Cash 
        key={currency.id} 
        title={currency.title} 
        ratio={currency.ratio}
        cash={amount} 
        />
      ));

    return (
      <div classname="app">
        <label>
          <input 
          type="number" 
          value={amount} 
          onChange={this.handleChange}/>  
        </label>
        {converters}
      </div>
    );
  }
}


ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))