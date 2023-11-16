import './modalStyles.css'
import React from "react";
import { createPortal } from 'react-dom';

const Modal = ({ children, onClose }) => {

    const modalContent = (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {children}
                <button onClick={onClose}>Close Modal</button>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};
export default Modal;