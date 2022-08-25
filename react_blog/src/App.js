import { useState } from "react";
import "./css/main.css";

function App() {
  let [worker, setworker] = useState(["drone", "prove", "SCV"]);
  let [count, setcount] = useState([0, 0, 0]);
  let [modal, setmodal] = useState(false);
  let [numcount, setnumcount] = useState(0);

  const basic = () => {
    let copy = [...worker];
    copy = ["zergling", "zelot", "marine"];
    setworker(copy);
  };
  const Modal = (props) => {
    return (
      <div className="app__modal">
        <h4>{props.worker[props.numcount]}</h4>
        <p>상세보기</p>
      </div>
    );
  };
  return (
    <div className="app">
      <div className="app__nav-menu">default</div>

      {worker.map((a, i) => {
        return (
          <div className="app__list">
            <h4
              onClick={() => {
                setmodal(!modal);
                setnumcount(i);
              }}
            >
              {worker[i]}
              <span
                onClick={() => {
                  let copy = [...count];
                  copy[i] = copy[i] + 1;
                  setcount(copy);
                }}
              >
                ❤
              </span>
              {count[i]}
            </h4>
            <p>상세보기</p>
          </div>
        );
      })}
      <button onClick={basic}>기초병사</button>
      {modal === true ? <Modal worker={worker} numcount={numcount} /> : ""}
    </div>
  );
}

export default App;
