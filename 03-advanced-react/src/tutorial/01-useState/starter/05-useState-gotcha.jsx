import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((currentState) => {
      const newState = currentState + 1;
      return newState;
    })
  }
  return (
    <div>
      <h4>{count}</h4>
      <button className="btn" type="button" onClick={handleClick}>Increase</button>
    </div>
  );
};

export default UseStateGotcha;
