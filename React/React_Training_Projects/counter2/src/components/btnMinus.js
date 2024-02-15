const BtnMinus = ({ setCounterValue, counterValue }) => {
  const decrementCounter = () => {
    setCounterValue(counterValue - 1);
  };
  return (
    <button className="btn btn-primary" onClick={decrementCounter}>
      Minus
    </button>
  );
};

export { BtnMinus };
