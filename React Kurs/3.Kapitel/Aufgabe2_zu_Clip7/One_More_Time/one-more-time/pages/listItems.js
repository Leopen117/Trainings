import { ListItem } from "./listItem";

function ListItems({ ints, name }) {
  return (
    <>
      {ints.map((int) => {
        return <ListItem key={int} int={int} name={name} />;
      })}
    </>
  );
}
export { ListItems };
