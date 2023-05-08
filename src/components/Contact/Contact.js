// import React, { useRef, useState } from 'react';
// import { TextField } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import squish from '../../hepers/ClassNameHelper';
// import emailjs from  '@emailjs/browser';
// import ReCAPTCHA from 'react-google-recaptcha';
// import './Contact.sass';

// const Contact = () => {
//   const publicKey = 'yYTYeCpYu324GnsQu';
//   const serviceId = 'service_contact_us';
//   const templateId = 'template_mar745j';
//   const recapKey = '6Lft4-UlAAAAAHTVJE3KeQoK28o9cE8uo3EvXvS7';

//   const refCaptcha = useRef();
//   const [formData, setFormData] = useState({
//     user_name: '', 
//     user_email: '',
//     message: '',
//     'g-recaptcha-response': ''
//   });
//   const [formErrors, setFormErrors] = useState({
//     name: '',
//     email: '',
//     description: '',
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     const token = refCaptcha.current.getValue();
//     setFormData({
//       ...formData,
//       'g-recaptcha-response': token
//     });
//     if (validateForm(formData)) {
//       emailjs.sendForm(serviceId, templateId, formData, publicKey)
//         .then((result) => {
//           console.log(result.text);
//         }, (error) => {
//           console.log('EMAILJS ERROR', error.text);
//         });
//     }
//   };
  
//   const validateForm = (formData) => {
//     let isValid = true;
//     const newErrors = { name: '', email: '', description: '' };
    
//     if (!formData.user_name.trim()) {
//       newErrors.name = 'Please enter your name';
//       isValid = false;
//     } else if (!/^[^<>&]+$/.test(formData.user_name)) {
//       newErrors.email = 'Please enter a valid name';
//       isValid = false;
//     }
    
//     if (!formData.user_email.trim()) {
//       newErrors.email = 'Please enter your email';
//       isValid = false;
//     } else if (!/^[^\s@]+([-+._][^\s@]+)*@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
//       newErrors.email = 'Please enter a valid email';
//       isValid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.description = 'Please describe your idea';
//       isValid = false;
//     }

//     setFormErrors(newErrors);
//     return isValid;
//   };

//   return (
//     <div id="contact" className="container contact">
//       <div className="contact-titles">
//         <span className="contact-sub-title">
//           Tell us about yourself
//           </span>
//         <h2 className="contact-title">Contact Us</h2>
//       </div>
//       <form className="contact-form" onSubmit={sendEmail}>
//         <TextField
//           className={`contact-field ${squish(formErrors.name)}`}
//           label="Name"
//           variant="standard"
//           name="user_name"
//           onChange={handleInputChange}
//           error={!!formErrors.name}
//           helperText={formErrors.name}
//         />
//         <TextField
//           className={`contact-field ${squish(formErrors.email)}`}
//           label="Email"
//           variant="standard"
//           name="user_email"
//           onChange={handleInputChange}
//           error={!!formErrors.email}
//           helperText={formErrors.email}
//         />
//         <TextField
//           className={`contact-field ${squish(formErrors.description)}`}
//           label="Message"
//           variant="standard"
//           name="message"
//           onChange={handleInputChange}
//           multiline
//           rows={4}
//           error={!!formErrors.description}
//           helperText={formErrors.description}
//         />
//         <ReCAPTCHA
//           ref={refCaptcha}
//           sitekey={recapKey}
//           size="invisible"
//         />
//         <button className="contact-submit-btn" type="submit">
//           <span>Send Message</span>
//           <ArrowForwardIcon />
//         </button>
//       </form>
//     </div>
    
//   );
// };

// export default Contact;