import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper';
import useScreen from '../hooks/useScreen';
import SwiperSlideContent from './SwiperSlideContent';
import projectCover from '../images/project-cover.png';
import taskyCover from '../images/caseTasky/tasky-cover.png';
import { TASKY_IMAGES } from '../constants/casesImages';
import LoadableImage from '../shared/LoadableImage';

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
          {TASKY_IMAGES.map(({ src }) => {
            return <LoadableImage key={src} src={src} alt="Project page" />;
          })}
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
