import { useState } from "react";
import Modal from 'react-modal';
import styles from '@/styles/modal.module.css';
import Button from "../button/button";

export interface ErrorModalProps {
  error: any, 
  initModalState: boolean
}

export default function ErrorModal({ error, initModalState }: ErrorModalProps) {
  const [modalIsOpen, setModalIsOpen] = useState(initModalState);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles[`modalContainer`]}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Error Modal"
        className={styles['modal']}
        ariaHideApp={false}
        // overlayClassName={styles['modalOverlay']}
      >
        <h3 className={styles['errorTitle']}>Oops! Something went wrong</h3>
        <p>{JSON.stringify(error)}</p>
        {/* <button onClick={closeModal}>Close Modal</button> */}
        <Button text={'close'} onClick={closeModal} type="secondary" size={1} />
      </Modal>
    </div>
  );
}