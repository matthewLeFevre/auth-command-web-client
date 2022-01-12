import React from "react";

export default function Modal({ children }) {
  return (
    <div className='modal__container'>
      <div className='modal'>{children}</div>
    </div>
  );
}

export function ModalBody({ children }) {
  return <div className='modal__body'>{children}</div>;
}
export function ModalHeader({ children }) {
  return <header className='modal__header'>{children}</header>;
}
export function ModalFooter({ children }) {
  return <footer className='modal__footer'>{children}</footer>;
}
