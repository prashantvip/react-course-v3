import React, { useState } from 'react'

const Form = ({ addItem }) => {
    const [newItemName, setNewItemName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItemName) return;
        addItem(newItemName);
        setNewItemName('')

    }
    return (
        <div>
            <h4>grocery bud</h4>
            <form className='form-control' onSubmit={handleSubmit}>
                <input type="text" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} className='form-input' />
                <button className='btn' type='submit'>add item</button>
            </form>
        </div>
    )
}

export default Form