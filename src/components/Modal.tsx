import React from 'react';
import styles from './Modal.module.scss';
import ReactPortal from './ReactPortal';
import { Photo } from '../interfaces/response';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  photo: Photo;
}

const Modal = ({ photo, isOpen, handleClose }: ModalProps) => {
  if (!isOpen) return null;

  const onBackdropClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === event.currentTarget) handleClose();
  };

  return (
    <ReactPortal>
      <div className={styles.modal} onClick={onBackdropClick}>
        <div className={styles.modalContent}>
          <button onClick={handleClose} className={styles.xBtn}>
            Close
          </button>
          <img width="540" src={photo.urls.regular} alt={photo.alt_description} />
          <div className={styles.sign}>
            <span>{'❤️' + photo.likes}</span>
            <span>{'Taken by ' + photo.user.username}</span>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
