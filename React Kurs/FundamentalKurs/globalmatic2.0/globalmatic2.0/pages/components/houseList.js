import { useEffect, useState } from "react";
import HouseRow from "./houseRow";
import AddHouse from "./addHouse";

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  const fetchHouses = async () => {
    const response = await fetch("/api/houses");
    const houses = await response.json();
    setHouses(houses);
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          House currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((h) => (
            <HouseRow key={h.id} house={h} />
          ))}
        </tbody>
      </table>
      <AddHouse onAdd={fetchHouses}></AddHouse>
    </>
  );
};

export default HouseList;
