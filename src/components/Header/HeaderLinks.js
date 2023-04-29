import { ReactComponent as LinkedInIcon } from '../images/linkedin.svg';
import { ReactComponent as UpWorkIcon } from '../images/up.svg';
import { ReactComponent as InstagramIcon } from '../images/instagram.svg';
import { ReactComponent as FacebookIcon } from '../images/facebook.svg';
import { ReactComponent as TelegramIcon } from '../images/telegram.svg';
import { ReactComponent as EmailIcon } from '../images/email.svg';
import useScreen from '../hooks/useScreen';

const HeaderLinks = () => {
  const { isMobile } = useScreen(575);

  if (isMobile()) {
    return;
  }

  return (
    <div className="header-links">
      <a
        className="header-links-item"
        target="_blank"
        href="https://www.linkedin.com/"
        rel="noreferrer"
      >
        <LinkedInIcon className="header-links-icon" />
      </a>
      <a
        className="header-links-item"
        target="_blank"
        href="https://www.upwork.com/"
        rel="noreferrer"
      >
        <UpWorkIcon className="header-links-icon" />
      </a>
      <a
        className="header-links-item"
        target="_blank"
        href="https://www.instagram.com/"
        rel="noreferrer"
      >
        <InstagramIcon className="header-links-icon" />
      </a>
      <a
        className="header-links-item"
        target="_blank"
        href="https://www.facebook.com/"
        rel="noreferrer"
      >
        <FacebookIcon className="header-links-icon" />
      </a>
      <a
        className="header-links-item"
        target="_blank"
        href="/"
        rel="noreferrer"
      >
        <TelegramIcon className="header-links-icon" />
      </a>

      <a
        className="header-links-item"
        target="_blank"
        href="/"
        rel="noreferrer"
      >
        <EmailIcon className="header-links-icon" />
      </a>
    </div>
  );
};

export default HeaderLinks;
