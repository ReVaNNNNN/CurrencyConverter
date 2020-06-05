const Cash = (props) => {
  return (
    <div>
      {props.title}
      {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
  };

  currencies = [
    {
      id: 1,
      name: "dolar",
      ratio: 4.1,
      title: "Wartość w dolarach: ",
    },
    {
      id: 2,
      name: "euro",
      ratio: 4.8,
      title: "Wartość w euro: ",
    },
    {
      id: 3,
      name: "pound",
      ratio: 5.5,
      title: "Wartość w funtach: ",
    },
  ];

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  render() {
    const { amount } = this.state;
    const calculators = this.currencies.map((item) => (
      <Cash key={item.id} title={item.title} cash={amount} ratio={item.ratio} />
    ));
    return (
      <div className="app">
        <label>
          <input type="number" value={amount} onChange={this.handleChange} />
        </label>
        {calculators}
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
