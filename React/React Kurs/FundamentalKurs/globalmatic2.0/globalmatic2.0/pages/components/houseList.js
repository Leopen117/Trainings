import HouseRow from "./houseRow";
import AddHouse from "./addHouse";
import useHouses from "@/public/hooks/useHouses";
import loadingStatus from "@/public/helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicator";

const HouseList = ({ selectHouse }) => {
  const { houses, fetchHouses, loadingState } = useHouses();
  if (loadingState !== loadingStatus.loaded)
    return <LoadingIndicator loadingState={loadingState} />;
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
            <HouseRow key={h.id} house={h} selectHouse={selectHouse} />
          ))}
        </tbody>
      </table>
      <AddHouse onAdd={fetchHouses}></AddHouse>
    </>
  );
};

export default HouseList;
