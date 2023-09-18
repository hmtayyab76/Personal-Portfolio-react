import "./App.css";
import Portfolio from "./Page/Portfolio";
import { TayyabData } from "./Page/Data/PData";
import Fade from "react-reveal";
function App() {
  return (
    <Fade>
      <div className="App">
        <Portfolio PersonData={TayyabData} />
      </div>
    </Fade>
  );
}

export default App;
