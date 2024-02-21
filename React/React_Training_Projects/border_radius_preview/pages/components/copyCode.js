const CopyCode = ({ code, totalRadius, setTotalRadius }) => {
  console.log("code:", code);
  const copycurrentCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Copied the text: " + code);
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
        value={code}
        onInput={pasteOwnCode}
      />
    </span>
  );
};

export { CopyCode };
