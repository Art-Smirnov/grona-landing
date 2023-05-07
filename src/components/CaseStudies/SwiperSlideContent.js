import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import { ReactComponent as CloseIcon } from '../images/close.svg';
import { ReactComponent as SearchIcon } from '../images/search-icon.svg';

const SwiperSlideContent = ({ slideCover, subtitle, title, children }) => {
  const [isOpenModal, setOpenIsModal] = useState(false);

  const handleToggleModal = () => {
    setOpenIsModal(!isOpenModal);
  };

  return (
    <div className="slider-slide-content">
      <div onClick={handleToggleModal} className="slider-slide-image-container">
        <img
          className="slider-slide-image"
          src={slideCover}
          alt="Project cover"
        />
        <div className="slider-slide-overlay">
          <SearchIcon />
          <span>Open case</span>
        </div>
      </div>
      <span className="slider-slide-subtitle">{subtitle}</span>
      <span className="slider-slide-title">{title}</span>
      {isOpenModal && (
        <Modal
          className="container container__modal"
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
