import { List } from "./list";

export default function Home() {
  return (
    <>
      <List increment={1} name="Paul" />
      <List increment={1} name="Leon" />
    </>
  );
}
