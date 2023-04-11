import React from 'react';
import styles from './Modal.module.scss';
import ReactPortal from './ReactPortal';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal = ({ children, isOpen, handleClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ReactPortal>
      <div className={styles.modal}>
        <button onClick={handleClose} className="close-btn">
          Close
        </button>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
