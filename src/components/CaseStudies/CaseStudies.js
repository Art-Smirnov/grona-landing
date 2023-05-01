import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper';
import projectCover from '../images/project-cover.png';
import { ReactComponent as ArrowIcon } from '../images/arrow-forward.svg';
import useScreen from '../hooks/useScreen';

import 'swiper/swiper-bundle.css';
import './CaseStudies.sass';

const CaseStudies = () => {
  const { isMobile, screenWidth } = useScreen(575);
  const isVertical = isMobile() ? 'vertical' : 'horizontal';
  const isThreePreviews = screenWidth >= 1024;

  return (
    <div id="case-studies" className="container case-studies">
      <div className="case-studies-subtitles">
        <span className="case-studies-quantity">1 &mdash; 5</span>
        <ArrowIcon />
      </div>
      <div className="case-studies-content">
        <h2 className="case-studies-title">Case Studies</h2>
        <Swiper
          className="case-studies-swiper"
          modules={[Navigation, Mousewheel]}
          spaceBetween={8}
          slidesPerView={isThreePreviews ? 3 : 2}
          // navigation
          mousewheel={true}
          grabCursor={true}
          direction={isVertical}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className="case-studies-project-slide">
            <div className="case-studies-project-slide-container">
              <img
                className="case-studies-project-slide-image"
                src={projectCover}
                alt="Project cover"
              />
              <span className="case-studies-project-slide-subtitle">
                UX/UI design
              </span>
              <span className="case-studies-project-slide-title">Polestar</span>
            </div>
          </SwiperSlide>

          <SwiperSlide className="case-studies-project-slide">
            <div className="case-studies-project-slide-container">
              <img
                className="case-studies-project-slide-image"
                src={projectCover}
                alt="Project cover"
              />
              <span className="case-studies-project-slide-subtitle">
                UX/UI design
              </span>
              <span className="case-studies-project-slide-title">Polestar</span>
            </div>
          </SwiperSlide>

          <SwiperSlide className="case-studies-project-slide">
            <div className="case-studies-project-slide-container">
              <img
                className="case-studies-project-slide-image"
                src={projectCover}
                alt="Project cover"
              />
              <span className="case-studies-project-slide-subtitle">
                UX/UI design
              </span>
              <span className="case-studies-project-slide-title">Polestar</span>
            </div>
          </SwiperSlide>

          <SwiperSlide className="case-studies-project-slide">
            <div className="case-studies-project-slide-container">
              <img
                className="case-studies-project-slide-image"
                src={projectCover}
                alt="Project cover"
              />
              <span className="case-studies-project-slide-subtitle">
                UX/UI design
              </span>
              <span className="case-studies-project-slide-title">Polestar</span>
            </div>
          </SwiperSlide>

          <SwiperSlide className="case-studies-project-slide">
            <div className="case-studies-project-slide-container">
              <img
                className="case-studies-project-slide-image"
                src={projectCover}
                alt="Project cover"
              />
              <span className="case-studies-project-slide-subtitle">
                UX/UI design
              </span>
              <span className="case-studies-project-slide-title">Polestar</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CaseStudies;
