function ListItem({ int, name }) {
  // console.log("ListItem Props: ", props);
  return (
    <li>
      {int} + {name}
    </li>
  );
}

export { ListItem };
