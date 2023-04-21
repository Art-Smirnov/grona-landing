import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper';
import projectCover from '../images/project1_cover.png';

import 'swiper/swiper-bundle.css';
import './CaseStudies.sass';

const CaseStudies = () => {
  return (
    <div className="container case-studies">
      <div className="case-studies-titles">
        <span className="case-studies-quantity">1 &mdash; 5</span>
        <h2 className="case-studies-title">Case Studies</h2>
      </div>
      <Swiper
        className="case-studies-swiper"
        modules={[Navigation, Mousewheel]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        mousewheel={true}
        grabCursor={true}
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
            <span>Project 1</span>
          </div>
        </SwiperSlide>

        <SwiperSlide className="case-studies-project-slide">
          <div className="case-studies-project-slide-container">
            <img
              className="case-studies-project-slide-image"
              src={projectCover}
              alt="Project cover"
            />
            <span>Project 2</span>
          </div>
        </SwiperSlide>

        <SwiperSlide className="case-studies-project-slide">
          <div className="case-studies-project-slide-container">
            <img
              className="case-studies-project-slide-image"
              src={projectCover}
              alt="Project cover"
            />
            <span>Project 3</span>
          </div>
        </SwiperSlide>

        <SwiperSlide className="case-studies-project-slide">
          <div className="case-studies-project-slide-container">
            <img
              className="case-studies-project-slide-image"
              src={projectCover}
              alt="Project cover"
            />
            <span>Project 4</span>
          </div>
        </SwiperSlide>

        <SwiperSlide className="case-studies-project-slide">
          <div className="case-studies-project-slide-container">
            <img
              className="case-studies-project-slide-image"
              src={projectCover}
              alt="Project cover"
            />
            <span>Project 5</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CaseStudies;
