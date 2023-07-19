import "./App.css";
import Portfolio from "./Page/Portfolio";
import { TayyabData } from "./Page/Data/PData";
function App() {
  return (
    <div className="App">
      <Portfolio PersonData={TayyabData} />
    </div>
  );
}

export default App;
