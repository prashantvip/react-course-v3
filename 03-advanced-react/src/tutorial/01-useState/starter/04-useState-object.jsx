import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState(
    {
      name: 'peter',
      age: 25,
      hobby: 'watching tv'
    }
  )
  const handleClick = () => {
    setPerson({
      name: 'john',
      age: 28,
      hobby: 'playing football'
    })
  }
  return (
    <div>
      <h2>{person.name}</h2>
      <h4>{person.age}</h4>
      <h4>{person.hobby}</h4>
      <button onClick={handleClick} className='btn'>show john</button>
    </div>
  );
};

export default UseStateObject;
