import { useState } from "react";
import data from './data'

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = parseInt(count);
    setText(data.slice(0, value))
  }
  return (
    <div>
      <h2>tired of boring lorem ipsum</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">pargraphs : </label>
        <input type="number" id="amount" name="amount" min='1' step='1' max='8' value={count} onChange={(e) => setCount(e.target.value)} />
        <button className="btn" type="submit">generate</button>
      </form>
      {text.map((item, index) => {
        return (
          <p key={index}>
            {item}
          </p>
        )
      })}
    </div>

  );
};
export default App;
