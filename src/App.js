import Board from "./components/Board";
import "./index.css";
import { useState } from "react";

function App() {
  const [grid, setGrid] = useState(20);
  const [color, setColor] = useState("black");

  const clearBoard = () => {
    var elements = document.getElementsByClassName("gridElement");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "white";
    }
    setColor("black");
  };

  const reset = () => {
    const changeGrid = prompt("Choose the grid size");
    if (changeGrid === null || changeGrid < 1) {
      setGrid(16);
    } else if (changeGrid > 100) {
      alert("100 is a maximum size grid!");
    } else {
      setGrid(changeGrid);
    }
    clearBoard();
  };

  return (
    <div className="App">
      <h1 className="App-header">ETCH-A-SKETCH</h1>
      <button className="big-button" onClick={() => setColor("black")}>
        Black
      </button>
      <button className="big-button" onClick={() => setColor("")}>
        Random Color
      </button>
      <button className="big-button" onClick={clearBoard}>
        Clear
      </button>
      <button className="big-button" onClick={reset}>
        Reset
      </button>
      <div className="Board">
        <Board size={grid} color={color} />
      </div>
    </div>
  );
}

export default App;
