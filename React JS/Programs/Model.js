Program-45   Modal 
******************
1. npm i react-modal
2. add the below code

import React, { useState } from 'react';
import Modal from 'react-modal';
export default function Test() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={false}
            >

                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <div>this is a div</div>
                <input />
            </Modal>
        </div>
    )
}
