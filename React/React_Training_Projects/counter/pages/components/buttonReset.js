import { Counter } from "./counter";

const BtnMinus = ({ Counter }) => {
  const ResetCounter = (counter) => {
    counter = 0;
  };
  return (
    <button className="btn btn-primary" onClick={ResetCounter}>
      Minus
    </button>
  );
};

export default BtnMinus;
