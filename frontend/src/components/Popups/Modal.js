import React from "react";
import { useContext } from "react";
import { ModalContext } from "../../context/modal-context";

import UilPlus from "@iconscout/react-unicons/icons/uil-plus";

import "../../assets/styles/Modal.css";

const Modal = () => {
  const toggleModal = useContext(ModalContext).toggleModal;

  const modalHandler = () => {
    toggleModal();
  };

  return (
    <div>
      <div className="Modal modal-container">
        <div className="modal-dialog">
          <div onClick={modalHandler} className="modal-content">
            <div className="modal-header-container">
              <h5 className="modal-title">Modal title</h5>
              <UilPlus className="times modal-btn" size="20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
