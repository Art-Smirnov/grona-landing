import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import squish from '../../hepers/ClassNameHelper';
import ReCAPTCHA from 'react-google-recaptcha';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ReactComponent as SuccessIcon } from '../images/success.svg';
import { ReactComponent as ErrorIcon } from '../images/error.svg';
import { ReactComponent as RefreshIcon } from '../images/refresh.svg';
import emailjs from '@emailjs/browser';

const Form = () => {
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

  const [emailStatus, setEmailStatus] = useState('');

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
    const newErrors = { name: '', email: '', description: '' };

    if (!formData.user_name) {
      //user_name
      newErrors.name = 'Please enter your name';
      isValid = false;
    } else if (!/^[^<>&0-9]+$/.test(formData.user_name)) {
      newErrors.name = 'Please enter a valid name';
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

    return isValid;
  };

  useEffect(() => {
    if (formData['g-recaptcha-response']) {
      emailjs.sendForm(serviceId, templateId, 'form', publicKey).then(
        (result) => {
          if (result.text === 'OK') {
            setEmailStatus('success');
          }
        },
        (error) => {
          if (error) {
            setEmailStatus('error');
          }
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

  if (emailStatus === 'success') {
    return (
      <div className="email-status-banner">
        <SuccessIcon />
        <h3>Thank You for Reaching Out!</h3>
        <span>
          We appreciate your message and would like to assure you that we are
          reviewing it carefully. Our team will be in touch with you shortly to
          discuss how we can help you achieve your goals.
        </span>
      </div>
    );
  }

  if (emailStatus === 'error') {
    const handleRefresh = () => {
      setEmailStatus('');
    };

    return (
      <div className="email-status-banner">
        <ErrorIcon />
        <h3>Oops! Something went wrong.</h3>
        <span>
          We&apos;re sorry, but it seems like there was an error submitting your
          message through our contact form. Please, refresh and try one more
          time
        </span>

        <button onClick={handleRefresh}>
          <span>Refresh</span>
          <RefreshIcon className="refresh-icon" />
        </button>
      </div>
    );
  }

  return (
    <form id="form" className="form" onSubmit={sendEmail}>
      <div className="form-inputs">
        <TextField
          className={squish`
            form-input
            ${formErrors.name ? 'error' : ''}
          `}
          label="Your name"
          variant="standard"
          id="user_name"
          name="user_name"
          value={formData.name}
          onChange={handleInputChange}
          helperText={formErrors.name}
          error={!!formErrors.name}
        />

        <TextField
          className={squish`
            form-input 
            ${formErrors.email ? 'error' : ''}
          `}
          label="Your email"
          variant="standard"
          id="email"
          type="email"
          name="user_email"
          value={formData.email}
          onChange={handleInputChange}
          helperText={formErrors.email}
          error={!!formErrors.email}
        />

        <TextField
          className={squish`
            form-input
            ${formErrors.description ? 'error' : ''}
          `}
          label="Message"
          variant="standard"
          id="message"
          type="text"
          value={formData.message}
          onChange={handleInputChange}
          name="message"
          error={!!formErrors.description}
          helperText={formErrors.description}
        />
        <small className={'recaptcha'}>
          This site is protected by reCAPTCHA and the Google &nbsp;
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and
          &nbsp;
          <a href="https://policies.google.com/terms">Terms of Service</a>{' '}
          apply.
        </small>
      </div>
      <ReCAPTCHA ref={refCaptcha} sitekey={recapKey} size="invisible" />
      <button type="submit" className="form-button">
        <span>Send</span>
        <ArrowForwardIcon />
      </button>
    </form>
  );
};

export default Form;
