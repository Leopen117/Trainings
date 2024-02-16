import { VariableBox } from "./components/variableBox";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  return (
    <div className="bg-secondary text-center vh-100">
      <div className="container ">
        <h1>Border-Radius-Previewer</h1>
      </div>
      <VariableBox></VariableBox>
    </div>
  );
}

export default Home;
