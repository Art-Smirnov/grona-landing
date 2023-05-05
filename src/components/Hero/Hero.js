import { ReactComponent as ArrowIcon } from '../images/arrow-forward.svg';

import './Hero.sass';

const Hero = () => {
  return (
    <div className="container hero">
      <div className="hero-sub-title-box">
        <span className="hero-sub-title">
          Building stunning products, creating attractive brands
        </span>
        <ArrowIcon className="hero-arrow-icon" />
      </div>
      <h1 className="hero-title">Design. Development. Advertisement.</h1>
    </div>
  );
};

export default Hero;
