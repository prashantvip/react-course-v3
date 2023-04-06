import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState());
  // console.log(useState(1));
  // let value = useState(1)[0];
  // console.log(value);
  // let func = useState(1)[1];
  // console.log(func);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleClick}>click me</button>
    </div>
  );
};

export default UseStateBasics;
