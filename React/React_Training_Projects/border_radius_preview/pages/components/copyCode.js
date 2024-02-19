const copyCode = () => {
  const borderRadiusCode = document.getElementById("borderRadiusCode");
  navigator.clipboard.writeText(borderRadiusCode.value);
  alert("Copied the text: " + borderRadiusCode.value);
};

const CopyCode = () => {
  return (
    <span className="input-group bg-danger position-absolute top-50 start-50 translate-middle d-flex justify-content-center">
      <button
        className="btn btn-primary"
        type="button"
        id="copyButton"
        onClick={copyCode}
      >
        Copy Code
      </button>
      <input
        id="borderRadiusCode"
        type="text"
        placeholder=""
        aria-label="Border-Radius-Code"
        aria-describedby="Border-Radius"
      />
    </span>
  );
};

export { CopyCode };
