import { ReactComponent as ArrowIcon } from '../images/arrow-forward.svg';
import Slider from './Slider';
import 'swiper/swiper-bundle.css';
import { SLIDES_LENGTH } from '../constants/slideItems';

import './CaseStudies.sass';

const CaseStudies = () => {
  return (
    <div id="case-studies" className="container case-studies">
      <div className="case-studies-subtitles">
        <span className="case-studies-quantity">1 &mdash; {SLIDES_LENGTH}</span>
        <ArrowIcon />
      </div>
      <div className="case-studies-content">
        <h2 className="case-studies-title">Case Studies</h2>
        <Slider />
      </div>
    </div>
  );
};

export default CaseStudies;
