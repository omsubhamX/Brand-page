import React from 'react';
import Modal from 'react-modal';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
};

const buttonStyles = {
  border: 'none',
  borderRadius: '4px',
  padding: '8px 16px',
  cursor: 'pointer',
  margin: '0 8px',
};

const ConfirmationModal = ({ isOpen, onConfirm, onCancel }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={modalStyles}
      contentLabel="Confirmation Modal"
    >
      <h2 style={{ marginBottom: '20px' }}>Leave This Page?</h2>
      <p>Are you sure you want to leave this page?</p>
      <div style={{ marginTop: '20px' }}>
        <button style={{ ...buttonStyles, background: '#4CAF50', color: 'white' }} onClick={onConfirm}>Leave this page</button>
        <button style={{ ...buttonStyles, background: '#f44336', color: 'white' }} onClick={onCancel}>Cancel</button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
