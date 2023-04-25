import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setMail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div>
        <label htmlFor="name">name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setMail(e.target.value)} />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};
export default ControlledInputs;
