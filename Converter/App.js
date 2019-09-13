const Cash = (props) => {
 const value = (props.cash / props.ratio * props.price).toFixed(2);

 return (
   <div> {props.title} {props.cash <= 0 ? "" : value} {props.cash <= 0 ? "" : props.symbol}</div>
 )
}

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "zloty"
  }

  static defaultProps = {
    currencies: [
      {
        id: 1,
        name: 'dollar',
        ratio: 3.9,
        title: 'Wartość w dolarach:',
        symbol: <span>&#36;</span>
      },
      {
        id: 2,
        name: 'euro',
        ratio: 4.35,
        title: 'Wartość w euro:',
        symbol: <span>&#8364;</span>
      },
      {
        id: 3,
        name: 'pound',
        ratio: 4.85,
        title: 'Wartość w funtach:',
        symbol: <span>&#163;</span>
      },
    ],

    prices: {
      zloty: 1,
      gold: 199,
      ground: 12000,
      bitcoin: 16000
    }
  }

  handleChange = e => {
    this.setState({
      amount: e.target.value
    })
  }

  handleSelect = e => {
    this.setState({
      amount: "",
      product: e.target.value
    })
  }

  insertSuffix(select) {
    if (select === "zloty") return <em>zł</em>
    else if (select === "gold") return <em>g</em>
    else if (select === "ground") return <em>m<sup>2</sup></em>
    else if (select === "bitcoin") return <em><i class="fa fa-btc"></i></em>
    else return null;
  }

  selectPrice(select) {
    return this.props.prices[select];
  }

  render() {
    const {amount, product} = this.state;
    const price = this.selectPrice(product);

    const converters = this.props.currencies.map(currency => (
        <Cash 
        key={currency.id} 
        title={currency.title} 
        symbol={currency.symbol}
        ratio={currency.ratio}
        cash={amount} 
        price={price}
        />
      ));

    return (
      <div classname="app">
        <label>
          <h3>Konwerter</h3>
          <h5>Wybierz:</h5>
          <select className="custom-select" value={product} onChange={this.handleSelect}>
            <option value="zloty">Złotówki</option>
            <option value="gold">Złoto</option>
            <option value="ground">Ziemia</option>
            <option value="bitcoin">Bitcoin</option>
          </select>
        </label>
        <br/>
        <label>
          <input 
          className="form-control"
          placeholder="Podaj ilość..."
          type="number" 
          value={amount} 
          onChange={this.handleChange}/>  
        </label>
        {this.insertSuffix(this.state.product)}
        {converters}
      </div>
    );
  }
}


ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))
