const { useState } = require("react");

const AddHouse = ({ onAdd }) => {
  const [id, setId] = useState("3");
  const [address, setAddress] = useState("32 Valley Way, New York");
  const [country, setCountry] = useState("USA");
  const [price, setPrice] = useState("1000000");

  const addHouse = () => {
    const houseData = { id, address, country, price };

    fetch("/api/houses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(houseData),
    }).then(() => {
      console.log("new house added!");
      onAdd();
    });
  };
  return (
    <button className="btn btn-primary" onClick={addHouse}>
      Add
    </button>
  );
};

export default AddHouse;
