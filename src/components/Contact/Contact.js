import React from 'react';
import { TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// eslint-disable-next-line import/no-named-as-default
import ReCAPTCHA from 'react-google-recaptcha';
// import Recaptcha from 'react-google-invisible-recaptcha';
import squish from '../../hepers/ClassNameHelper';

import './Contact.sass';

class Contact extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      callback: 'not fired',
      value: '[empty]',
      recaptchaLoaded: false,
      formData: { email: '', description: '' },
      formErrors: {},
    };
    this._reCaptchaRef = React.createRef();
  }

  componentDidMount() {
       console.log('didMount - reCaptcha Ref-', this._reCaptchaRef);
  }

  handleChange = (value) => {
    console.log('onChange prop - Captcha value:', value);
    this.setState({ value });
  };

  asyncScriptOnLoad = () => {
    this.setState({ callback: 'called!', recaptchaLoaded: true });
    console.log('scriptLoad - reCaptcha Ref-', this._reCaptchaRef);
  };

  onSubmit = () => {
    const res = this._reCaptchaRef.current.execute();
    console.log(res);
  };

  onSubmitAsync = () => {
    this._reCaptchaRef.current.executeAsync().then((value) => {
      console.log('executeAsync promise - Captcha value:', value);
    });
  };
  validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', description: '' };

    if (!this.state.formData.email) {
      newErrors.email = 'Please enter your email';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(this.state.formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!this.state.formData.description) {
      newErrors.description = 'Please describe your idea';
      isValid = false;
    }

    this.setState({
      formErrors: { error: newErrors },
    });
    console.log("Errors ", this.state.formErrors)
    return isValid;
  };
  handleInputChange = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.id]: e.target.value,
      },
    });
  };
  handleSendButtonClick = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      console.log("validated")
      this._reCaptchaRef.current.execute();
      this.onSubmit();
      this._reCaptchaRef.current.reset();
    }
  };
  render() {
    const {  recaptchaLoaded } = this.state || {};
    return (
      <div id="contact" className="container contact">
        <div className="contact-titles">
          <span className="contact-sub-title">
            Tell us about yourself and the project
          </span>
          <h2 className="contact-title">Get in Touch</h2>
        </div>

        <form className="form" onSubmit={this.handleSendButtonClick}>
          <div className="form-inputs">
            <TextField
              className={squish`
              form-input
              ${this.state.formErrors.email ? 'error' : ''}
            `}
              label="Your email"
              variant="standard"
              id="email"
              value={this.state.formData.email}
              onChange={this.handleInputChange}
              error={!!this.state.formErrors.email}
              helperText={this.state.formErrors.email}
            />
            <TextField
              className={squish`
              form-input
              ${this.state.formErrors.email ? 'error' : ''}
            `}
              label="Describe your idea"
              variant="standard"
              id="description"
              value={this.state.formData.description}
              onChange={this.handleInputChange}
              error={!!this.state.formErrors.description}
              helperText={this.state.formErrors.description}
            />
            {/* {load && ( */}
              <ReCAPTCHA
                style={{ display: 'inline-block' }}
                theme="dark"
                size="invisible"
                ref={this._reCaptchaRef}
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={this.handleChange}
                asyncScriptOnLoad={this.asyncScriptOnLoad}
              />
            {/* )} */}
          </div>

          <button
            type="submit"
            // onClick={this.onSubmit}
            disabled={!recaptchaLoaded}
            className="form-button"
          >
            <span>Send</span>
            <ArrowForwardIcon />
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
