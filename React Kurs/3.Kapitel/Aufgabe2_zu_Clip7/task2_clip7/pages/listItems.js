import ListItem from "./listItem";

function ListItems({ ints, addValue }) {
  return (
    <>
      <button onClick={addValue}>Add Item</button>
      {ints.map((id) => {
        return <ListItem key={id} id={id} />;
      })}
    </>
  );
}

export { ListItems };
