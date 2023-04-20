import React from 'react'
import avatar from '../../../assets/default-avatar.svg'

const Person = ({ name, nickName = 'shakeAndBake', images }) => {
    const image = images?.[0]?.small?.url || avatar
    return (
        <div>
            <img src={image} alt={name} style={{ width: '100px' }} />
            <h2>{name}</h2>
            <h3>Nickname:{nickName}</h3>
        </div>
    )
}

export default Person