/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useState } from "react";

export const ModalContext = React.createContext({
  openModal: false,
  toggleModal: () => {},
});

export default (props) => {
  const [openModal, setOpenModal] = useState(false);

  const changeModalStatus = () => {
    setOpenModal(!openModal);
  };

  return (
    <ModalContext.Provider value={{ openModal: openModal, toggleModal: changeModalStatus }}>
      {props.children}
    </ModalContext.Provider>
  );
};
