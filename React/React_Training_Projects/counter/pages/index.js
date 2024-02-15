import { useState } from "react";
import BtnList from "./components/btnList";
import Counter from "./components/counter";

function Home() {
  //const [counterValue, setCounterValue] = useState(0);

  return (
    <>
      <div>
        <h1>Counter Project</h1>
        <h2>somtimes up, somtimes down</h2>
      </div>
      <div>
        <Counter></Counter>
      </div>
      <div>
        {/* <BtnList
          setCounterValue={setCounterValue}
          counterValue={counterValue}
        ></BtnList> */}
      </div>
    </>
  );
}

export default Home();
