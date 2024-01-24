import { useState } from "react";
import { ListItems } from "./listItems";

export default function List() {
  const [ints, setInts] = useState([1, 2, 3]);
  function addValue() {
    const newVal = Math.max(...ints) + 1;
    setInts([...ints, newVal]);
  }
  return (
    <ul>
      <ListItems ints={ints} addValue={addValue} />
    </ul>
  );
}
