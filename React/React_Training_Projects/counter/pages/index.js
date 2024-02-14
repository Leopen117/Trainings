import { BtnList } from "./components/btnList";

function Home() {
  return (
    <>
      <div>
        <h1>Counter Project</h1>
        <h2>somtimes up, somtimes down</h2>
      </div>
      <div>{/* <Display></Display> */}</div>
      <div>
        <BtnList></BtnList>
      </div>
    </>
  );
}

export default Home();
