import { ReactComponent as AppLogo } from '../images/grona_logo.svg';
import { ReactComponent as LinkedInIcon } from '../images/linkedin.svg';
import { ReactComponent as UpWorkIcon } from '../images/up.svg';
import { ReactComponent as InstagramIcon } from '../images/instagram.svg';
import { ReactComponent as FacebookIcon } from '../images/facebook.svg';
import { ReactComponent as TelegramIcon } from '../images/telegram.svg';
import { ReactComponent as EmailIcon } from '../images/email.svg';

import './Header.sass';

const Header = () => {
  // const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  //
  // const animateIt = (e) => {
  //   const span = e.currentTarget.querySelector('span');
  //   const { offsetX: x, offsetY: y } = e.nativeEvent;
  //   const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
  //
  //   const move = 10;
  //   const xMove = (x / width) * (move * 2) - move;
  //   const yMove = (y / height) * (move * 2) - move;
  //
  //   span.style.transform = `translate(${xMove}px, ${yMove}px)`;
  //
  //   if (e.type === 'mouseleave') span.style.transform = '';
  // };
  //
  // const editCursor = (e) => {
  //   setCursorPos({ x: e.clientX, y: e.clientY });
  // };

  return (
    <div className="header-container header">
      <AppLogo className="header-logo" />
      <nav className="header-nav">
        <a href="#">
          <span className="header-nav-item">Work</span>
        </a>
        <a href="#">
          <span className="header-nav-item">Company</span>
        </a>
        <a href="#">
          <span className="header-nav-item">Team</span>
        </a>
        <a href="#">
          <span className="header-nav-item">Contact</span>
        </a>
      </nav>

      <div className="header-links">
        <a
          className="header-links-item"
          target="_blank"
          href="https://www.linkedin.com/"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          className="header-links-item"
          target="_blank"
          href="https://www.upwork.com/"
          rel="noreferrer"
        >
          <UpWorkIcon />
        </a>
        <a
          className="header-links-item"
          target="_blank"
          href="https://www.instagram.com/"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          className="header-links-item"
          target="_blank"
          href="https://www.facebook.com/"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          className="header-links-item"
          target="_blank"
          href="/"
          rel="noreferrer"
        >
          <TelegramIcon />
        </a>

        <a
          className="header-links-item"
          target="_blank"
          href="/"
          rel="noreferrer"
        >
          <EmailIcon />
        </a>
      </div>
    </div>
  );
};

export default Header;
