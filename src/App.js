import { useState } from "react";
import "./App.css";
import FirstPage from "./components/FisrtPage";
import SecondPage from "./components/SecondPage";

function App() {
  const [isChoose, setIsChoose] = useState(false);

  return (
    <div className="App">
      <div className="App-header">
        {isChoose ? (
          <SecondPage setIsChoose={setIsChoose} />
        ) : (
          <FirstPage setIsChoose={setIsChoose} />
        )}
      </div>
    </div>
  );
}

export default App;
