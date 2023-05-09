import Form from './Form';

import './Contact.sass';

const Contact = () => {
  return (
    <div id="contact" className="container contact">
      <div className="contact-titles">
        <span className="contact-sub-title">
          Tell us about yourself and the project
        </span>
        <h2 className="contact-title">Get in Touch</h2>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
