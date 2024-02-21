const CopyCode = ({ totalRadius, setTotalRadius }) => {
  console.log("totalRadius:", totalRadius);

  const copycurrentCode = () => {
    navigator.clipboard.writeText(totalRadius);
    alert("Copied the text: " + totalRadius);
  };

  const pasteOwnCode = (event) => {
    console.log("pastey", event.target.value);
    setTotalRadius(event.target.value);
  };

  return (
    <span className="input-group bg-transparent position-absolute top-50 start-50 translate-middle d-flex justify-content-center">
      <button
        className="btn btn-primary"
        type="button"
        id="copyButton"
        onClick={copycurrentCode}
      >
        Copy Code
      </button>
      <input
        id="borderRadiusCode"
        type="text"
        placeholder=""
        aria-label="Border-Radius-Code"
        aria-describedby="Border-Radius"
        value={totalRadius}
        onInput={pasteOwnCode}
      />
    </span>
  );
};

export { CopyCode };
