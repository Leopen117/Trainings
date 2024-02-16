const VariableBox = () => {
  const copyCode = () => {
    const borderRadiusCode = document.getElementById("borderRadiusCode");
    navigator.clipboard.writeText(borderRadiusCode.value);
    alert("Copied the text: " + borderRadiusCode.value);
  };
  return (
    <>
      <div className="container w-50 h-50 aligne-middle ">
        <div className="h-100 bg-danger">
          <span className="input-group bg-danger">
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
        </div>
      </div>
    </>
  );
};

export { VariableBox };
