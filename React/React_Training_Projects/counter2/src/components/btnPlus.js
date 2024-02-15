const BtnPlus = ({ setCounterValue, counterValue }) => {
  const incrementCounter = () => {
    setCounterValue(counterValue + 1);
  };
  return (
    <button className="btn btn-primary" onClick={incrementCounter}>
      Plus
    </button>
  );
};

export { BtnPlus };
