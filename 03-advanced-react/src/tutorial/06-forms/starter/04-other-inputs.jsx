import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false)
  const [framework, setFramework] = useState('react')
  const handleChange = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.shipping)
  }

  const handleFramework = (e) => {
    setFramework(e.target.value)
  }

  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input type="checkbox" name="shipping" checked={shipping} onChange={handleChange} />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select name="framework" id="framework" value={framework} onChange={handleFramework}>
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>
            })}
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
