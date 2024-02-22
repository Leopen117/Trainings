import { useEffect, useState } from "react";
import { CopyCode } from "../components/copyCode";
import { InputField } from "./inputField";

const VariableBox = ({ currentUnit }) => {
  const [radiusLu, setRadiusLu] = useState(20);
  const [radiusRu, setRadiusRu] = useState(20);
  const [radiusLb, setRadiusLb] = useState(20);
  const [radiusRb, setRadiusRb] = useState(20);
  const [totalRadius, setTotalRadius] = useState(
    `${radiusLu}${currentUnit} ${radiusRu}${currentUnit} ${radiusRb}${currentUnit} ${radiusLb}${currentUnit}`
  );
  useEffect(() => {
    setTotalRadius(
      `${radiusLu}${currentUnit} ${radiusRu}${currentUnit} ${radiusRb}${currentUnit} ${radiusLb}${currentUnit}`
    );
  }, [radiusLu, radiusRu, radiusLb, radiusRb, currentUnit]);

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
            borderRadius: totalRadius,
            borderTopLeftRadius: radiusLu + currentUnit,
            borderTopRightRadius: radiusRu + currentUnit,
            borderBottomLeftRadius: radiusLb + currentUnit,
            borderBottomRightRadius: radiusRb + currentUnit,
          }}
        >
          <CopyCode
            totalRadius={totalRadius}
            setTotalRadius={setTotalRadius}
          ></CopyCode>
        </div>
        <div className="row">
          <InputField radius={radiusLb} setRadius={setRadiusLb}></InputField>
          <InputField radius={radiusRb} setRadius={setRadiusRb}></InputField>
        </div>
      </div>
    </>
  );
};

export { VariableBox };
