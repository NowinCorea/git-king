import React, { useState } from "react";

function Counter() {
  const [num, setnum] = useState(0);
  const onIncrease = () => {
    setnum(num + 1);
  };

  const onDecrease = () => {
    num <= 0 ? alert("이거안됨") : setnum(num - 1);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
