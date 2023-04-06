import { useState } from "react";
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    console.log(id);
    const newPeople = people.filter((person) => person.id !== id);
    console.log(newPeople);
    setPeople(newPeople);
  }
  const removeAllItem = () => {
    setPeople([]);
  }
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button type="button" className="btn" style={{ marginTop: '2rem' }} onClick={removeAllItem}>Clear Items</button>
    </div>
  );
};

export default UseStateArray;


