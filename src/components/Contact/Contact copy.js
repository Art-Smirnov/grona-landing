import React, { useRef, useState } from 'react';
import { TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// eslint-disable-next-line import/no-named-as-default
import ReCAPTCHA from 'react-google-recaptcha';
// import Recaptcha from 'react-google-invisible-recaptcha';
import squish from '../../hepers/ClassNameHelper';

import './Contact.sass';

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', description: '' });
  const [formErrors, setFormErrors] = useState({ email: '', description: '' });
  const recaptchaRef = useRef();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSendButtonClick = (e) => {
    e.preventDefault();
    recaptchaRef.current.execute();
    onSubmit();
    recaptchaRef.current.reset();
  };
  // const onResolved = () => {
  //   alert( 'Recaptcha resolved with response: ' + recaptchaRef.getResponse() );
  // }

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

  const onSubmit = () => {
    if (validateForm()) {
      alert(`Email: ${formData.email}\nDescription: ${formData.description}`);
      setFormData({ email: '', description: '' });
      setFormErrors({ email: '', description: '' });
    }
  };

  return (
    <div id="contact" className="container contact">
      <div className="contact-titles">
        <span className="contact-sub-title">
          Tell us about yourself and the project
        </span>
        <h2 className="contact-title">Get in Touch</h2>
      </div>

      <form className="form" onSubmit={handleSendButtonClick}>
        <div className="form-inputs">
          <TextField
            className={squish`
              form-input
              ${formErrors.email ? 'error' : ''}
            `}
            label="Your email"
            variant="standard"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
          />
          <TextField
            className={squish`
              form-input
              ${formErrors.email ? 'error' : ''}
            `}
            label="Describe your idea"
            variant="standard"
            id="description"
            value={formData.description}
            onChange={handleInputChange}
            error={!!formErrors.description}
            helperText={formErrors.description}
          />
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={value => console.log("onChange prop - Captcha value:", value)}
            theme="dark"
          />
          {/* <Recaptcha
            ref={recaptchaRef}
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onResolved={onResolved}
          /> */}
        </div>

        <button type="submit" className="form-button">
          <span>Send</span>
          <ArrowForwardIcon />
        </button>
      </form>
    </div>
  );
};

export default Contact;
