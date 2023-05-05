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

      <Accordion className="first" title="Branding">
        <ul>
          <li>Logo design</li>
          <li>Brand identity development</li>
          <li>Brand strategy</li>
          <li>Brand guidelines</li>
        </ul>
      </Accordion>

      <Accordion title="UX/UI Design">
        <ul>
          <li>User research</li>
          <li>Wireframing and prototyping</li>
          <li>User interface design</li>
          <li>User experience design</li>
        </ul>
      </Accordion>

      <Accordion title="Web Development">
        <ul>
          <li>Custom website development</li>
          <li>E-commerce website development</li>
          <li>Content management systems (CMS)</li>
          <li>Responsive design and development</li>
        </ul>
      </Accordion>

      <Accordion title="Mobile App Development">
        <ul>
          <li>iOS app development</li>
          <li>Android app development</li>
          <li>Cross-platform app development</li>
          <li>Mobile app design</li>
        </ul>
      </Accordion>

      <Accordion title="PPC Advertising">
        <ul>
          <li>Facebook & Instagram Advertising</li>
          <li>Google Advertising</li>
          <li>TikTok Advertising</li>
          <li>PPC campaign management</li>
        </ul>
      </Accordion>
    </div>
  );
};

export default Capabilities;
