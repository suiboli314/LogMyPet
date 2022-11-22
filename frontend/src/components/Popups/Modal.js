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
              <h6 className="modal-title">What do you want to record?</h6>
              <UilPlus className="times modal-btn" size="20" />
            </div>
          </div>
          <div className="selection-container">
            <h6 className="selection-title">Category</h6>
            <div className="selection-row">
              <div className="selection-tag">
                <div className="selection-icon"></div>
                <div className="selection-content">Eating</div>
              </div>
              <div className="selection-tag">
                <div className="selection-icon"></div>
                <div className="selection-content">Drinking</div>
              </div>
              <div className="selection-tag">
                <div className="selection-icon"></div>
                <div className="selection-content">Poop</div>
              </div>
              <div className="selection-tag">
                <div className="selection-icon"></div>
                <div className="selection-content">Pee</div>
              </div>
            </div>
            <div className="selection-row">
              <div className="selection-tag">
                <div className="selection-icon"></div>
                <div className="selection-content">Cut nails</div>
              </div>
              <div className="selection-tag">
                <div className="selection-icon"></div>
                <div className="selection-content">Brush teeth</div>
              </div>
              <div className="selection-tag">
                <div className="selection-icon"></div>
                <div className="selection-content">Bath</div>
              </div>
              <div className="selection-tag">
                <div className="selection-icon"></div>
                <div className="selection-content">Deworm</div>
              </div>
            </div>
          </div>
          <div className="selection-container">
            <h6 className="selection-title">You want to record for?</h6>
            <div className="selection-row">
              <div className="selection-tag">
                <div className="selection-icon"></div>
                <div className="selection-content">Puddy</div>
              </div>
              <div className="selection-tag">
                <div className="selection-icon"></div>
                <div className="selection-content">Lilca</div>
              </div>
            </div>
          </div>
          <div className="input-container">
            <div className="input"></div>
            <button type="button" className="btn btn-primary">Create profile</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Modal;
