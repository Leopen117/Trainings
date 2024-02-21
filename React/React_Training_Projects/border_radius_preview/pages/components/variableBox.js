import { useState } from "react";
import { CopyCode } from "../components/copyCode";
import { InputField } from "./inputField";
import { Radio } from "./radio";

const VariableBox = () => {
  const [radiusLu, setRadiusLu] = useState(20);
  const [radiusRu, setRadiusRu] = useState(20);
  const [radiusLb, setRadiusLb] = useState(20);
  const [radiusRb, setRadiusRb] = useState(20);

  const [radioPx, setRadioPx] = useState("Pixel(px)");
  const [radioRem, setRadioRem] = useState("Rem(rem)");

  return (
    <>
      <div className="container w-50 h-50 aligne-middle">
        <div className="row">
          <InputField radius={radiusLu} setRadius={setRadiusLu}></InputField>
          <InputField radius={radiusRu} setRadius={setRadiusRu}></InputField>
        </div>
        <div
          className="h-100 bg-danger position-relative"
          style={{
            borderTopLeftRadius: radiusLu,
            borderTopRightRadius: radiusRu,
            borderBottomLeftRadius: radiusLb,
            borderBottomRightRadius: radiusRb,
          }}
        >
          <CopyCode
            code={[
              radiusLu +
                "px" +
                " " +
                radiusRu +
                "px " +
                " " +
                radiusLb +
                "px " +
                " " +
                radiusRb +
                "px",
            ]}
          ></CopyCode>
        </div>
        <div className="row">
          <InputField radius={radiusLb} setRadius={setRadiusLb}></InputField>
          <InputField radius={radiusRb} setRadius={setRadiusRb}></InputField>
          <Radio radio={radioPx} setRadio={setRadioPx}></Radio>
          <Radio radio={radioRem} setRadio={setRadioRem}></Radio>
          {/* <Radio></Radio>
      <Radio></Radio>
      <Radio></Radio>
      <Radio></Radio>
      <Radio></Radio>
    <Radio></Radio> */}
        </div>
      </div>
    </>
  );
};

export { VariableBox };
