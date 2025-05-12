import React from 'react';
import './Modal.css';
import {useDispatch, useSelector} from "react-redux";
export function ModalPage({isOpen, onClose, children}) {
    if (!isOpen) return null;

    return (
            <div className="modal">
                <div className="modal-wrapper">
                    <div className="modal-content">
                        <button className="modal-close-button" onClick={() => onClose()}>X</button>
                      
                        {children}
                    </div>
                </div>
            </div>

        )
}