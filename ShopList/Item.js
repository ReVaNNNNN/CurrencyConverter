const Item = (props) => {
  return (
    <li
      onClick={() => props.function(props.id)}
      style={props.active ? { fontWeight: "bold" } : { color: "gray" }}
    >
      {props.name}
    </li>
  );
};
