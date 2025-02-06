/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Modal = ({ children, modal, setModal, hidden }) => {
  return (
    <>
      <div
        onClick={() => setModal(false)}
        className={`bg-white50% fixed-0 z-10 
          ${modal ? 'visible opacity-100' : 'invisible opacity-0'} 
          ${hidden} transition-opacity duration-500`}
      />
      {children}
    </>
  );
};

export default Modal;
