const Radio = ({ radio, setRadio }) => {
  const radioValue = () => {
    if (radio == "Pixel(px)") {
      setRadio(radio);
    }
  };
  return (
    <>
      <div class="form-check d-flex">
        <input
          class="form-check-input me-3"
          type="radio"
          name="flexRadio"
          onClick={radioValue}
        />
        <label class="form-check-label row" for="flexRadioDefault1">
          {radio}
        </label>
      </div>
    </>
  );
};

export { Radio };
