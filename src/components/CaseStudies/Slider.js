import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper';
import useScreen from '../hooks/useScreen';
import SwiperSlideContent from './SwiperSlideContent';
import projectCover from '../images/project-cover.png';
import taskyCover from '../images/caseTasky/tasky-cover.png';
import taskyImage1 from '../images/caseTasky/1.jpg';
import taskyImage2 from '../images/caseTasky/2.jpg';
import taskyImage3 from '../images/caseTasky/3.jpg';
import taskyImage4 from '../images/caseTasky/4.jpg';
import taskyImage5 from '../images/caseTasky/5.jpg';
import taskyImage6 from '../images/caseTasky/6.jpg';
import taskyImage7 from '../images/caseTasky/7.jpg';
import taskyImage8 from '../images/caseTasky/8.jpg';
import taskyImage9 from '../images/caseTasky/9.jpg';
import taskyImage10 from '../images/caseTasky/10.jpg';
import taskyImage11 from '../images/caseTasky/11.jpg';
import taskyImage12 from '../images/caseTasky/12.jpg';
import taskyImage13 from '../images/caseTasky/13.jpg';
import taskyImage14 from '../images/caseTasky/14.jpg';
import taskyImage15 from '../images/caseTasky/15.jpg';
import taskyImage16 from '../images/caseTasky/16.jpg';
import taskyImage17 from '../images/caseTasky/17.jpg';
import taskyImage18 from '../images/caseTasky/18.jpg';
import taskyImage19 from '../images/caseTasky/19.jpg';
import taskyImage20 from '../images/caseTasky/20.jpg';
import taskyImage21 from '../images/caseTasky/21.jpg';
import taskyImage22 from '../images/caseTasky/22.jpg';

const Slider = () => {
  const { isMobile, screenWidth } = useScreen(575);
  const isVertical = isMobile() ? 'vertical' : 'horizontal';
  const isThreePreviews = screenWidth >= 1240;
  return (
    <Swiper
      className="slider"
      modules={[Navigation, Mousewheel]}
      spaceBetween={8}
      slidesPerView={isThreePreviews ? 3 : 2}
      // navigation
      mousewheel={true}
      // grabCursor={true}
      direction={isVertical}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="slider-slide">
        <SwiperSlideContent
          slideCover={taskyCover}
          subtitle="UX/UI design"
          title="Polestar"
        >
          <img src={taskyImage1} alt="Project page" />
          <img src={taskyImage2} alt="Project page" />
          <img src={taskyImage3} alt="Project page" />
          <img src={taskyImage4} alt="Project page" />
          <img src={taskyImage5} alt="Project page" />
          <img src={taskyImage6} alt="Project page" />
          <img src={taskyImage7} alt="Project page" />
          <img src={taskyImage8} alt="Project page" />
          <img src={taskyImage9} alt="Project page" />
          <img src={taskyImage10} alt="Project page" />
          <img src={taskyImage11} alt="Project page" />
          <img src={taskyImage12} alt="Project page" />
          <img src={taskyImage13} alt="Project page" />
          <img src={taskyImage14} alt="Project page" />
          <img src={taskyImage15} alt="Project page" />
          <img src={taskyImage16} alt="Project page" />
          <img src={taskyImage17} alt="Project page" />
          <img src={taskyImage18} alt="Project page" />
          <img src={taskyImage19} alt="Project page" />
          <img src={taskyImage20} alt="Project page" />
          <img src={taskyImage21} alt="Project page" />
          <img src={taskyImage22} alt="Project page" />
        </SwiperSlideContent>
      </SwiperSlide>

      <SwiperSlide className="slider-slide">
        <SwiperSlideContent
          slideCover={projectCover}
          subtitle="UX/UI design"
          title="Polestar"
        >
          <img src={projectCover} alt="Project cover" />
        </SwiperSlideContent>
      </SwiperSlide>
      <SwiperSlide className="slider-slide">
        <SwiperSlideContent
          slideCover={projectCover}
          subtitle="UX/UI design"
          title="Polestar"
        >
          <img src={projectCover} alt="Project cover" />
        </SwiperSlideContent>
      </SwiperSlide>
      <SwiperSlide className="slider-slide">
        <SwiperSlideContent
          slideCover={projectCover}
          subtitle="UX/UI design"
          title="Polestar"
        >
          <img src={projectCover} alt="Project cover" />
        </SwiperSlideContent>
      </SwiperSlide>
      <SwiperSlide className="slider-slide">
        <SwiperSlideContent
          slideCover={projectCover}
          subtitle="UX/UI design"
          title="Polestar"
        >
          <img src={projectCover} alt="Project cover" />
        </SwiperSlideContent>
      </SwiperSlide>

      {!isMobile() && <SwiperSlide></SwiperSlide>}
    </Swiper>
  );
};

export default Slider;
