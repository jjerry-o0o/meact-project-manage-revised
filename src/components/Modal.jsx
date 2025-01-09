import { forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({children}, ref) {
  return createPortal(
    <dialog>{children}</dialog>
    , document.getElementById('modal-root')
  );
});

export default Modal;