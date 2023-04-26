import { useState } from 'react';
import { TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// eslint-disable-next-line import/no-named-as-default
import ReCAPTCHA from 'react-google-recaptcha';

import './Contact.sass';

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', description: '' });
  const [formErrors, setFormErrors] = useState({ email: '', description: '' });
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSendButtonClick = (e) => {
    e.preventDefault();

    if (!isCaptchaVerified) {
      alert('Please verify that you are a human!');
      return;
    }

    if (validateForm()) {
      alert(`Email: ${formData.email}\nDescription: ${formData.description}`);
      setFormData({ email: '', description: '' });
      setFormErrors({ email: '', description: '' });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', description: '' };

    if (!formData.email) {
      newErrors.email = 'Please enter your email';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.description) {
      newErrors.description = 'Please describe your idea';
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleCaptchaChange = (value) => {
    setIsCaptchaVerified(value);
  };

  return (
    <div className="container contact">
      <div className="contact-titles">
        <span className="contact-sub-title">
          Tell us about yourself and the project
        </span>
        <h2 className="contact-title">Get in Touch</h2>
      </div>

      <form className="form">
        <div className="form-inputs">
          <TextField
            className="form-input"
            label="Your email"
            variant="standard"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
          />
          <TextField
            className="form-input"
            label="Describe your idea"
            variant="standard"
            id="description"
            value={formData.description}
            onChange={handleInputChange}
            error={!!formErrors.description}
            helperText={formErrors.description}
          />
          <ReCAPTCHA
            theme="dark"
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={handleCaptchaChange}
          />
        </div>

        <button className="form-button" onClick={handleSendButtonClick}>
          <span>Send</span>
          <ArrowForwardIcon />
        </button>
      </form>
    </div>
  );
};

export default Contact;
