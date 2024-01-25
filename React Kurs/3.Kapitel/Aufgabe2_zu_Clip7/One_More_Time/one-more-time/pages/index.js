import { List } from "./list";

function Home() {
  return (
    <li>
      <List increment={1} name={"Paul"} />
      <List increment={2} name={"Raphael"} />
      <List increment={3} name={"Leon"} />
      <List increment={4} name={"Merlin"} />
    </li>
  );
}

export default Home;
