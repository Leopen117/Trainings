import { useEffect, useState } from "react";
import loadingStatus from "../helpers/loadingStatus";

const useHouses = () => {
  const [houses, setHouses] = useState([]);
  const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

  const fetchHouses = async () => {
    try {
      setLoadingState(loadingStatus.isLoading);
      const response = await fetch("/api/houses");
      const houses = await response.json();
      setHouses(houses);
      setLoadingState(loadingStatus.loaded);
    } catch {
      setLoadingState(loadingStatus.hasErrored);
    }
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  return { houses, fetchHouses, loadingState };
};

export default useHouses;
