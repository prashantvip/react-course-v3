import { useState } from "react";
import data from './data'
const App = () => {
  const [people, setPeople] = useState(data);
  // console.log(people);
  const handleClick = () => {
    setPeople([]);
  }
  return (
    <section>
      <p>{people.length} birthday today</p>
      {people.map((person) => {
        console.log(person);
        const { id, name, age, image } = person;
        return (
          <div key={id}>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <h4>{age}</h4>
          </div>
        )
      })}
      <button onClick={handleClick} className="btn" type="button">Clear all</button>
    </section>
  );
};
export default App;
