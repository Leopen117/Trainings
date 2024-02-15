import { BtnMinus } from "./btnMinus";
import { BtnPlus } from "./btnPlus";
import { BtnReset } from "./buttonReset";

const btnStyle = {
  color: "goldenrod",
  backgroundcolor: "rgb(84, 8, 184)",
  width: "50px",
};

const BtnList = ({ setCounterValue, counterValue }) => {
  return (
    <>
      <BtnMinus
        setCounterValue={setCounterValue}
        counterValue={counterValue}
        style={btnStyle}
      >
        Minus
      </BtnMinus>
      {/* <BtnReset style={btnStyle}>Reset</BtnReset>
      <BtnPlus style={btnStyle}>Plus</BtnPlus> */}
    </>
  );
};

export default BtnList;
