import { useState } from "react";
import { Radio } from "./components/radio";
import { VariableBox } from "./components/variableBox";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  const [currentUnit, setCurrentUnit] = useState("px");
  const units = ["px", "%", "rem", "em"];

  return (
    <div className="bg-secondary text-center vh-100">
      <div className="container ">
        <h1>Border-Radius-Previewer</h1>
      </div>
      <VariableBox currentUnit={currentUnit}></VariableBox>
      <div className="radioGroup">
        <Radio unit={units[0]} setUnit={setCurrentUnit}></Radio>
        <Radio unit={units[1]} setUnit={setCurrentUnit}></Radio>
        <Radio unit={units[2]} setUnit={setCurrentUnit}></Radio>
        <Radio unit={units[3]} setUnit={setCurrentUnit}></Radio>
      </div>
    </div>
  );
}

export default Home;
