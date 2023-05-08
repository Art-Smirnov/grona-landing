import squish from '../../../hepers/ClassNameHelper';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import './LoadableImage.sass';

const LoadableImage = ({ src, alt = '', onLoad = () => {} }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!inView || isLoaded) {
      return;
    }

    if (imageRef.current) {
      imageRef.current.onload = () => {
        setIsLoaded(true);
        onLoad();
      };
    }
  }, [isLoaded, inView, onLoad]);

  return (
    <div
      ref={ref}
      className={squish`
        loadable-image-container
        ${isLoaded ? 'containerLoaded' : ''}
      `}
    >
      {(inView || isLoaded) && (
        <img
          ref={imageRef}
          className={squish`
            loadable-image
            ${isLoaded ? 'imageLoaded' : ''}
          `}
          src={src}
          alt={alt}
        />
      )}
    </div>
  );
};

LoadableImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onLoad: PropTypes.func,
};

export default LoadableImage;
