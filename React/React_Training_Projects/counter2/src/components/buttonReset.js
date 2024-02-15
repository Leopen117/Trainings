const BtnReset = ({ setCounterValue, counterValue }) => {
  const resetCounter = () => {
    setCounterValue((counterValue = 0));
  };
  return (
    <button className="btn btn-primary" onClick={resetCounter}>
      Reset
    </button>
  );
};

export { BtnReset };
