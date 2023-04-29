import React, { useState } from 'react'

const SIngleItem = ({ item, removeItem }) => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div className='single-item'>
            <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <p style={{ textDecoration: isChecked && 'line-through' }}>{item.name}</p>
            <button className='btn' onClick={() => removeItem(item.id)}>delete</button>
        </div>
    )
}

export default SIngleItem