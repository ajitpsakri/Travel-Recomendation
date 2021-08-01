import "./App.css";
import hubliDoc from "./db/hubli.js";
import { useState } from "react";
import display from "./components/display";
import reactDom from "react-dom";
function App() {
  const [content, setContent] = useState(
    ""
  );

  const handleClick = (ele) => {
    setContent(display(ele));
   
  };


  return (
    <div className="App">
      <h1>Hubli Travel Guide</h1>
      <nav className="buttons">
        {hubliDoc.map((ele) => {
          return (
            <button onClick={() => {
              handleClick(ele)
              }} key={ele["button"]}>
              {ele["button"]}
            </button>
          );
        })}
      </nav>
      <section className="places">{content}</section>
    </div>
  );
}

export default App;
