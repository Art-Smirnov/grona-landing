import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import { ReactComponent as CloseIcon } from '../images/close.svg';

const SwiperSlideContent = ({ slideCover, subtitle, title, children }) => {
  const [isOpenModal, setOpenIsModal] = useState(false);

  const handleToggleModal = () => {
    setOpenIsModal(!isOpenModal);
  };

  return (
    <div className="slider-slide-content">
      <img
        className="slider-slide-image"
        src={slideCover}
        alt="Project cover"
        onClick={handleToggleModal}
      />
      <span className="slider-slide-subtitle">{subtitle}</span>
      <span className="slider-slide-title">{title}</span>
      {isOpenModal && (
        <Modal
          open
          onClose={handleToggleModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <>
            <button className="modal-close-button" onClick={handleToggleModal}>
              <CloseIcon />
            </button>
            <div className="modal">{children}</div>
          </>
        </Modal>
      )}
    </div>
  );
};

SwiperSlideContent.propTypes = {
  slideCover: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SwiperSlideContent;
