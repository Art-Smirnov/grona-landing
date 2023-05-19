import { ReactComponent as LinkedInIcon } from '../images/linkedin.svg';
import { ReactComponent as UpWorkIcon } from '../images/up.svg';
import { ReactComponent as InstagramIcon } from '../images/instagram.svg';
import { ReactComponent as FacebookIcon } from '../images/facebook.svg';
import { ReactComponent as WhatsAppIcon } from '../images/whats-up.svg';
import { ReactComponent as EmailIcon } from '../images/email.svg';

import './FollowUs.sass';

const FollowUs = () => {
  return (
    <div className="follow-us container">
      <div className="follow-us-titles">
        <span className="follow-us-subtitle">Let&apos;s stay connected</span>
        <h2 className="follow-us-title">Follow us</h2>
      </div>
      <div className="social-links-cards">
        <a
          target="_blank"
          href="https://www.linkedin.com/company/grona-tech/"
          rel="noreferrer"
          className="social-links-card"
        >
          <LinkedInIcon className="social-links-card-icon" />
          <span className="social-links-card-title">LinkedIn</span>
        </a>

        <a
          target="_blank"
          href="https://www.upwork.com/ag/gronatech"
          rel="noreferrer"
          className="social-links-card"
        >
          <UpWorkIcon className="social-links-card-icon" />
          <span className="social-links-card-title">Upwork</span>
        </a>

        <a
          target="_blank"
          href="https://www.instagram.com/grona.tech/"
          rel="noreferrer"
          className="social-links-card"
        >
          <InstagramIcon className="social-links-card-icon" />
          <span className="social-links-card-title">Instagram</span>
        </a>

        <a
          target="_blank"
          href="https://www.facebook.com/grona.tech"
          rel="noreferrer"
          className="social-links-card"
        >
          <FacebookIcon className="social-links-card-icon" />
          <span className="social-links-card-title">Facebook</span>
        </a>

        <a
          target="_blank"
          href="https://wa.me/message/EYJJQZZGG5CNP1"
          rel="noreferrer"
          className="social-links-card"
        >
          <WhatsAppIcon className="social-links-card-icon" />
          <span className="social-links-card-title">WhatsApp</span>
        </a>

        <a
          href="mailto:inbox@grona.tech"
          rel="noreferrer"
          className="social-links-card"
        >
          <EmailIcon className="social-links-card-icon" />
          <span className="social-links-card-title">Email</span>
        </a>
      </div>
    </div>
  );
};

export default FollowUs;
