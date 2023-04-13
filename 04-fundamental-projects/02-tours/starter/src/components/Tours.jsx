import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, removeTour }) => {
    return (
        <div>
            <h2>Our tours...</h2>
            {tours.map((tour) => {
                return <Tour {...tour} key={tour.id} removeTour={removeTour} />
            })}
        </div>
    )
}

export default Tours