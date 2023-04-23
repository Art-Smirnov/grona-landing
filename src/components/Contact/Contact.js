import { TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './Contact.sass';

const Contact = () => {
  return (
    <div className="container contact">
      <div className="contact-titles">
        <span className="contact-sub-title">
          Tell us about yourself and the project
        </span>
        <h2 className="contact-title">Get in Touch</h2>
      </div>

      <div className="form">
        <div className="form-inputs">
          <TextField
            className="form-input"
            label="Your email"
            variant="standard"
          />
          <TextField
            className="form-input"
            label="Describe your idea"
            variant="standard"
          />
        </div>

        <button className="form-button">
          <span>Send</span>
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default Contact;
