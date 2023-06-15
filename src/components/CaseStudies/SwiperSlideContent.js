import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../images/search-icon.svg';
import { Link } from 'react-router-dom';
import useScreen from '../hooks/useScreen';

const SwiperSlideContent = ({ slideCover, subtitle, title, url }) => {
  const { isMobile } = useScreen(575);
  const cover = isMobile() ? slideCover.vertical : slideCover.horizontal;

  return (
    <div className="slider-slide-content">
      <Link to={`/cases/${url}`}>
        <div className="slider-slide-image-container">
          <img className="slider-slide-image" src={cover} alt="Project cover" />
          <div className="slider-slide-overlay">
            <SearchIcon />
            <span>Open case</span>
          </div>
        </div>
      </Link>

      <span className="slider-slide-subtitle">{subtitle}</span>
      <span className="slider-slide-title">{title}</span>
    </div>
  );
};

SwiperSlideContent.propTypes = {
  slideCover: PropTypes.shape({
    horizontal: PropTypes.string.isRequired,
    vertical: PropTypes.string.isRequired,
  }).isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.node.isRequired,
};

export default SwiperSlideContent;
