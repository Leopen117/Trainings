import { Counter } from "./counter";

const BtnMinus = ({}) => {
  const decrementCounter = (counter) => {};
  return (
    <button className="btn btn-primary" onClick={decrementCounter}>
      Minus
    </button>
  );
};

export default BtnMinus;
