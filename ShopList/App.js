class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "majonez", active: true },
      { id: 2, name: "jajka", active: false },
      { id: 3, name: "masło", active: true },
      { id: 4, name: "woda gazowana", active: false },
      { id: 5, name: "gumy do żucia", active: false },
      { id: 6, name: "ser żółty", active: true },
    ],
  };

  handleChangeStatus = (id) => {
    const items = this.state.items.map((item) => {
      if (id === item.id) {
        item.active = !item.active;
      }

      return item;
    });

    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          function={this.handleChangeStatus}
        />
      </>
    );
  }
}
