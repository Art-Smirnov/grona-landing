import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Accordion as MuiAccordion } from '@mui/material';
import PropTypes from 'prop-types';
import squish from '../../../hepers/ClassNameHelper';

import './Accordion.sass';

const Accordion = ({ title, className, children }) => {
  return (
    <MuiAccordion
      className={squish`
        accordion 
        ${className ? className : ''}
      `}
      sx={{ backgroundColor: '#191C21' }}
    >
      <AccordionSummary
        className="accordion-summary"
        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <span className="accordion-title">{title}</span>
      </AccordionSummary>
      <AccordionDetails>
        <div className="accordion-details">{children}</div>
      </AccordionDetails>
    </MuiAccordion>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Accordion;
