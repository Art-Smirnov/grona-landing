import Accordion from '../shared/Accordion';
import { ReactComponent as AsteriskIcon } from '../images/asterisk.svg';

import './Capabilities.sass';

const Capabilities = () => {
  return (
    <div id="capabilities" className="container capabilities">
      <div className="capabilities-titles">
        <AsteriskIcon className="capabilities-asterisk" />
        <h2 className="capabilities-title">Our Capabilities</h2>
      </div>

      <Accordion
        className="first"
        title="UX & product design"
        details="Our design services include web design, mobile app design, 
        UI/UX design, responsive design, and more. We use the latest design 
        trends and techniques to create designs that are not only visually 
        stunning but also user-friendly and optimized for performance."
      />

      <Accordion
        title="Product development"
        details="Our web development services include designing, building, 
        and maintaining websites and web applications. Our team of experts 
        uses the latest technologies and frameworks to ensure your website 
        is optimized for performance and user experience."
      />
    </div>
  );
};

export default Capabilities;
