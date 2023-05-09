import React, { useContext } from 'react'
import { AppContext } from './context'
import { FaTimes } from 'react-icons/fa'

const Modal = () => {
    const { isModalOpen, closeModal } = useContext(AppContext)
    return (
        <div className='modal-overlay'>
            <div className='modal-container'>
                <h3>modal content</h3>
                <button onClick={closeModal} className='close-modal-btn'><FaTimes /></button>
            </div>
        </div>
    )
}

export default Modal