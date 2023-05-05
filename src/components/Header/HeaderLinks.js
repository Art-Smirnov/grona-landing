import { ReactComponent as LinkedInIcon } from '../images/linkedin.svg';
import { ReactComponent as UpWorkIcon } from '../images/up.svg';
import { ReactComponent as InstagramIcon } from '../images/instagram.svg';
import { ReactComponent as FacebookIcon } from '../images/facebook.svg';
import { ReactComponent as WhatsAppIcon } from '../images/whats-up.svg';
import { ReactComponent as EmailIcon } from '../images/email.svg';
import useScreen from '../hooks/useScreen';
import PropTypes from 'prop-types';
import squish from '../../hepers/ClassNameHelper';

const HeaderLinks = ({ isSideBar }) => {
  const { isMobile } = useScreen(575);

  if (isMobile() && !isSideBar) {
    return;
  }

  return (
    <div
      className={squish`
        header-links 
        ${isSideBar ? 'side-bar' : ''}
      `}
    >
      <a
        className="header-links-item"
        target="_blank"
        href="https://www.linkedin.com/company/grona-tech/"
        rel="noreferrer"
      >
        <LinkedInIcon className="header-links-icon" />
      </a>
      <a
        className="header-links-item"
        target="_blank"
        href="https://www.upwork.com/agencies/~01885e02e837a4498e/"
        rel="noreferrer"
      >
        <UpWorkIcon className="header-links-icon" />
      </a>
      <a
        className="header-links-item"
        target="_blank"
        href="https://www.instagram.com/grona.tech/"
        rel="noreferrer"
      >
        <InstagramIcon className="header-links-icon" />
      </a>
      <a
        className="header-links-item"
        target="_blank"
        href="https://www.facebook.com/grona.tech"
        rel="noreferrer"
      >
        <FacebookIcon className="header-links-icon" />
      </a>
      <a
        className="header-links-item"
        target="_blank"
        href="https://wa.me/message/EYJJQZZGG5CNP1"
        rel="noreferrer"
      >
        <WhatsAppIcon className="header-links-icon" />
      </a>

      <a
        className="header-links-item"
        href="mailto:inbox@grona.tech"
        rel="noreferrer"
      >
        <EmailIcon className="header-links-icon" />
      </a>
    </div>
  );
};

HeaderLinks.propTypes = {
  isSideBar: PropTypes.bool,
};

export default HeaderLinks;
