const InputField = ({ radiusLu, setRadiusLu }) => {
  const changeRadiusLuValue = (event) => {
    setRadiusLu(parseInt(event.target.value));
    console.log("event:", event);
  };
  return (
    <div className="col">
      <input
        onChange={changeRadiusLuValue}
        type="number"
        min="0"
        max="180"
        value={radiusLu}
      />
    </div>
  );
};

export { InputField };
