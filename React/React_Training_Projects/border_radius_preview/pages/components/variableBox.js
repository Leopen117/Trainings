import { useState } from "react";
import { CopyCode } from "../components/copyCode";
import { InputField } from "./inputField";

const VariableBox = () => {
  const [radiusLu, setRadiusLu] = useState(20);

  return (
    <div className="container w-50 h-50 aligne-middle">
      <div className="row">
        <InputField radiusLu={radiusLu} setRadiusLu={setRadiusLu}></InputField>
        {/* <InputField></InputField> */}
      </div>
      <div
        className="h-100 bg-danger position-relative"
        style={{ borderTopLeftRadius: radiusLu }}
      >
        <CopyCode></CopyCode>
      </div>
      <div className="row">
        {/* <InputField></InputField>
        <InputField></InputField> */}
      </div>
    </div>
  );
};

export { VariableBox };
