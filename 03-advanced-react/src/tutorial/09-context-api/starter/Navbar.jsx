import React, { createContext, useContext, useState } from 'react'
import NavLinks from './NavLinks'


export const NavbarContext = createContext()

// custom hooks

export const useAppContext = () => useContext(NavbarContext)

const Navbar = () => {
    const [user, setUser] = useState({
        name: 'bob'
    })

    const handleLog = () => {
        setUser(null)
    }
    return (
        <NavbarContext.Provider value={{ user, handleLog }}>
            <nav className='navbar'>
                <h5>Context API</h5>
                <NavLinks />
            </nav>
        </NavbarContext.Provider>
    )
}

export default Navbar