import { useState } from "react";
import { Counter } from "./components/counter";
import { BtnList } from "./components/btnList";

function App() {
  const [counterValue, setCounterValue] = useState(0);

  return (
    <>
      <div>
        <h1>Counter Project</h1>
        <h2>somtimes up, somtimes down</h2>
      </div>
      <div>
        <Counter counterValue={counterValue}></Counter>
      </div>
      <div>
        <BtnList
          setCounterValue={setCounterValue}
          counterValue={counterValue}
        ></BtnList>
      </div>
      <div>
        <Counter counterValue={counterValue}></Counter>
      </div>
    </>
  );
}
export default App;
