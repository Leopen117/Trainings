const { useState } = require("react");
const { ListItems } = require("./listItems");

function List({ increment, name }) {
  const [ints, setInts] = useState([1, 2, 3]);

  function addValue(incrementValue) {
    const newValue = Math.max(...ints) + incrementValue;
    setInts([...ints, newValue]);
  }
  return (
    <>
      <button onClick={() => addValue(increment)}>Add Item</button>
      <ul>
        <ListItems ints={ints} increment={increment} name={name} />
      </ul>
    </>
  );
}
export { List };
