import { useState } from "react";
import "./css/main.css";

function App() {
  let [worker, setworker] = useState(["drone", "prove", "SCV"]);
  return (
    <div className="app">
      <div className="app__nav-menu">default</div>
      <div className="app__list">
        <h4>{worker[0]}</h4>
        <p>상세보기</p>
      </div>
      <div className="app__list">
        <h4>{worker[1]}</h4>
        <p>상세보기</p>
      </div>
      <div className="app__list">
        <h4>{worker[2]}</h4>
        <p>상세보기</p>
      </div>
    </div>
  );
}

export default App;
