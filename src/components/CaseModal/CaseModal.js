import React from 'react';
import Modal from '@mui/material/Modal';
import { ReactComponent as CloseIcon } from '../images/close.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { IMAGES } from '../constants/casesImages';
import LoadableImage from '../shared/LoadableImage';

import './CaseModal.sass';

const CaseModal = () => {
  const navigate = useNavigate();
  const { caseName } = useParams();
  const images = IMAGES[caseName];

  if (!images) return null;
  const handleBack = (e) => {
    e.stopPropagation();
    navigate('/');
  };

  return (
    <Modal
      className="container container__modal"
      open
      onClose={handleBack}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <button className="modal-close-button" onClick={handleBack}>
          <CloseIcon />
        </button>
        <div className="modal">
          {images.map(({ src }) => {
            return <LoadableImage key={src} src={src} alt="Project page" />;
          })}
        </div>
      </>
    </Modal>
  );
};

export default CaseModal;
