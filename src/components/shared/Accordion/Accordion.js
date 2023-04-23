import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Accordion as MuiAccordion } from '@mui/material';
import PropTypes from 'prop-types';

import './Accordion.sass';

const Accordion = ({ title, details }) => {
  return (
    <MuiAccordion className="accordion" sx={{ backgroundColor: '#191C21' }}>
      <AccordionSummary
        className="accordion-summary"
        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <span className="accordion-text">{title}</span>
      </AccordionSummary>
      <AccordionDetails>
        <span className="accordion-text">{details}</span>
      </AccordionDetails>
    </MuiAccordion>
  );
};

Accordion.propTypes = {
  details: PropTypes.string,
  title: PropTypes.string,
};

export default Accordion;
