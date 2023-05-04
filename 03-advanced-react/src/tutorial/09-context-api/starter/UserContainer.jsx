import React from 'react'
import { useAppContext } from './Navbar'

const UserContainer = () => {
    const { user, handleLog } = useAppContext()
    return (
        <div className='user-container'>
            {user ? (
                <>
                    <p>Hello there {user?.name}</p>
                    <button className='btn' onClick={handleLog}>logout</button>
                </>) : (
                <p>please login</p>
            )}

        </div>
    )
}

export default UserContainer