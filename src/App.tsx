import React from "react";
import "./App.css";
import data from "./data/data.json";

interface Data {
  img: string;
  alt: string;
}

function App() {
  return (
    <div className="App">
      {data.map((data: Data) => (
        <div className="img">
          <img src={data.img} alt={data.img} />
        </div>
      ))}
    </div>
  );
}

export default App;
