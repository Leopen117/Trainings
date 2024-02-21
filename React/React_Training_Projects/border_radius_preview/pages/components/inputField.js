const InputField = ({ radius, setRadius }) => {
  const changeRadiusValue = (event) => {
    setRadius(parseInt(event.target.value));
  };
  return (
    <div className="col">
      <input
        onChange={changeRadiusValue}
        type="number"
        min="0"
        max="1000"
        value={radius}
      />
    </div>
  );
};

export { InputField };
