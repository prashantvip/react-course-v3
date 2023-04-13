import React, { useState } from 'react'

const Tour = ({ id, name, image, info, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <div style={{ marginBottom: "50px" }}>
            <img src={image} alt={name} style={{ width: '25%' }} />
            <h2>{name}</h2>
            <p>{readMore ? info : `${info.substring(0, 200)}....`}
                <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
            </p>
            <button className='btn delete-btn' onClick={() => removeTour(id)}>remove</button>
        </div>
    )
}

export default Tour