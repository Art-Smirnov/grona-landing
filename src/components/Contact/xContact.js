import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import squish from '../../hepers/ClassNameHelper';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

import './Contact.sass';

const Contact = () => {
  const publicKey = 'yYTYeCpYu324GnsQu';
  const serviceId = 'service_contact_us';
  const templateId = 'template_mar745j';
  const refCaptcha = React.createRef();
  const recapKey = '6Lft4-UlAAAAAHTVJE3KeQoK28o9cE8uo3EvXvS7';
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    description: '',
  });

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
    'g-recaptcha-response': '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = (formData) => {
    let isValid = true;
    const newErrors = { email: '', description: '' };
    if (!formData.user_name) {
      //user_name
      newErrors.name = 'Please enter your name';
      isValid = false;
    } else if (!/^[^<>&]+$/.test(formData.user_name)) {
      newErrors.email = 'Please enter a valid name';
      isValid = false;
    }
    if (!formData.user_email) {
      //email
      newErrors.email = 'Please enter your email';
      isValid = false;
    } else if (
      !/^[^\s@]+([-+._][^\s@]+)*@[^\s@]+\.[^\s@]+$/.test(formData.user_email)
    ) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.message) {
      //message
      newErrors.description = 'Please describe your idea';
      isValid = false;
    }

    setFormErrors(newErrors);
    if (formErrors.name || formErrors.email || formErrors.description) {
      console.log(formErrors);
    }
    return isValid;
  };

  useEffect(() => {
    if (formData['g-recaptcha-response'] !== '') {
      emailjs.sendForm(serviceId, templateId, 'form', publicKey).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log('EMAILJS ERROR', error.text);
        }
      );
    }
  }, [formData['g-recaptcha-response']]);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (validateForm(formData)) {
      let token = await refCaptcha.current.executeAsync();

      setFormData({
        ...formData,
        'g-recaptcha-response': token,
      });
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
      <form id="form" className="form" onSubmit={sendEmail}>
        <div className="form-inputs">
          <TextField
            className={squish`form-input`}
            label="Your name"
            variant="standard"
            id="user_name"
            name="user_name"
            value={formData.name}
            onChange={handleInputChange}
            required={true}
            helperText={formErrors.name}
            error={!!formErrors.name}
          />

          <TextField
            className={squish`form-input${formErrors.email ? 'error' : ''}`}
            label="Your email"
            variant="standard"
            id="email"
            type="email"
            name="user_email"
            value={formData.email}
            onChange={handleInputChange}
            required={true}
            helperText={formErrors.email}
            error={!!formErrors.email}
          />

          <TextField
            className={squish`form-input`}
            label="Message"
            variant="standard"
            id="message"
            type="text"
            value={formData.message}
            onChange={handleInputChange}
            required={true}
            name="message"
          />
        </div>
        <ReCAPTCHA ref={refCaptcha} sitekey={recapKey} size="invisible" />

        <button type="submit" className="form-button">
          <span>Send</span>
          <ArrowForwardIcon />
        </button>
      </form>
    </div>
  );
};

export default Contact;
