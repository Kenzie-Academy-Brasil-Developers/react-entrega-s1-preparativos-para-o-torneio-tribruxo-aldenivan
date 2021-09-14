import "./App.css";
import { useEffect, useState } from "react";
import FirstPage from "./components/FisrtPage";
import Students from "./components/Students";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <FirstPage />
      </div>
    </div>
  );
}

export default App;
