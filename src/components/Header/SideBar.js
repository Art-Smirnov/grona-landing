import { Drawer } from '@mui/material';
import PropTypes from 'prop-types';
import HeaderNav from './HeaderNav';
import { ReactComponent as CloseIcon } from '../images/close.svg';
import { ReactComponent as ArrowOutwardIcon } from '../images/arrow-outward.svg';
import HeaderLinks from './HeaderLinks';

const SideBar = ({ onClose }) => {
  return (
    <Drawer onClose={onClose} open anchor="right">
      <button onClick={onClose} className="sidebar-close-button">
        <CloseIcon />
      </button>
      <HeaderNav onCloseSideBar={onClose} isSideBar />
      <a
        href="#contact"
        className="side-bar-contact-us-button"
        onClick={onClose}
      >
        <ArrowOutwardIcon />
        <span className="side-bar-contact-us-button-title">Contact Us</span>
      </a>
      <HeaderLinks isSideBar />
    </Drawer>
  );
};

SideBar.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SideBar;
