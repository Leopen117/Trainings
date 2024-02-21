const Radio = ({ unit, setUnit }) => {
  const radioValue = (event) => {
    setUnit(event.target.id);
  };
  return (
    <>
      <div className="form-check d-flex">
        <input
          id={unit}
          className="form-check-input me-3"
          type="radio"
          name="flexRadio"
          onClick={radioValue}
        />
        <label className="form-check-label row" htmlFor={unit}>
          {unit}
        </label>
      </div>
    </>
  );
};

export { Radio };
