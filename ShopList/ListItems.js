const ListItems = (props) => {
  const items = props.items.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      active={item.active}
      function={props.function}
    />
  ));
  return (
    <div className="list">
      <h1> Twoje zamówienie</h1>
      <ul>{items}</ul>
    </div>
  );
};
