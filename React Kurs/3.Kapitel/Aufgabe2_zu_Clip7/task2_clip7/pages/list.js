import { useState } from "react";
import { ListItems } from "./listItems";

function List({ increment, name }) {
  const [ints, setInts] = useState([1, 2, 3]);

  function addValue(incrementValue) {
    const newVal = Math.max(...ints) + incrementValue;
    setInts([...ints, newVal]);
  }

  return (
    <>
      <button onClick={() => addValue(increment)}>Add Item</button>

      <ul>
        <ListItems
          ints={ints}
          addValue={addValue}
          incremtent={increment}
          name={name}
        />
      </ul>
    </>
  );
}

export { List };
