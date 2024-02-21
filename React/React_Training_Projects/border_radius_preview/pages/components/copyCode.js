const CopyCode = (code) => {
  const copycurrentCode = () => {
    navigator.clipboard.writeText(code.code);
    alert("Copied the text: " + code.code);
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
        value={code.code}
        readOnly
      />
    </span>
  );
};

export { CopyCode };
