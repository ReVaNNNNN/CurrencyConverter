class ShoppingList extends React.Component {
  state = {
    items1: "Masło",
    items2: "Majonez",
    items3: "Orzechy",
  };

  render() {
    return (
      <>
        <h1>Lista zakupów</h1>
        <ul>
          <ItemList name={this.state.items1} />
          <ItemList name={this.state.items2} />
          <ItemList name={this.state.items3} />
        </ul>
      </>
    );
  }
}

const ItemList = (props) => {
  return <li>{props.name}</li>;
};

ReactDOM.render(<ShoppingList />, document.getElementById("root"));
