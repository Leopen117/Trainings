import Banner from "./banner";
import HouseList from "./houseList";
import House from "./house";
import { useState } from "react";

const App = () => {
  const [selectedHouse, setSelectedHouse] = useState();

  const setSelectedHouseWrapper = (house) => {
    setSelectedHouse(house);
  };
  return (
    <>
      <Banner>
        <div>"Poviding houses all over the world"</div>
      </Banner>
      {selectedHouse ? (
        <House house={selectedHouse} />
      ) : (
        <HouseList selectHouse={setSelectedHouseWrapper} />
      )}
    </>
  );
};
export default App;
