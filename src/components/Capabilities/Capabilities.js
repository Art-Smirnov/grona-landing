import Accordion from '../shared/Accordion';

import './Capabilities.sass';

const Capabilities = () => {
  return (
    <div id="capabilities" className="container capabilities">
      <div className="capabilities-titles">
        <span className="capabilities-asterisk">*</span>
        <h2 className="capabilities-title">Our Capabilities</h2>
      </div>

      <Accordion
        title="UX & product design"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
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
