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
        details="Welcome to Grona.Tech! We are a team of professionals
          specializing in web application development for e-commerce. We
          are delighted to have you here and help bring your ideas to life.
          Learn more about our services and past projects we have completed.
          Thank you for choosing us!"
      />

      <Accordion
        title="Product development"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
    </div>
  );
};

export default Capabilities;
