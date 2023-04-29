import React from 'react'
import SIngleItem from './SIngleItem'

const Items = ({ items, removeItem }) => {
    return (
        <div>
            {items.map((item) => {
                return <SIngleItem item={item} key={item.id} removeItem={removeItem} />
            })}
        </div>
    )
}

export default Items