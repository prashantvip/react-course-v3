import { useState } from "react";
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUser] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return
    const payload = {
      id: Date.now(),
      name: name
    }
    setUser([...users, payload])
    setName('')
  }

  const handleDelete = (id) => {
    const newUsers = users.filter((user) => user.id !== id)
    setUser(newUsers)
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      {users.map((item) => {
        return (
          <div key={item.id}>
            <h4>
              {item.name}
              <button className="btn" type="button" onClick={() => handleDelete(item.id)}>remove</button>
            </h4>
          </div>
        )
      })}
    </div>
  );
};
export default UserChallenge;
