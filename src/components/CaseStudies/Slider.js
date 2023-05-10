import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper';
import useScreen from '../hooks/useScreen';
import SwiperSlideContent from './SwiperSlideContent';
import taskyCoverHorizontal from '../images/caseTasky/taskyCoverHorizontal.png';
import taskyCoverVertical from '../images/caseTasky/taskyCoverVertical.png';
import { TASKY_IMAGES } from '../constants/casesImages';
import LoadableImage from '../shared/LoadableImage';

const Slider = () => {
  const { isMobile, screenWidth } = useScreen(575);
  const isThreePreviews = screenWidth >= 1240 || screenWidth < 576;
  const taskyCover = isMobile() ? taskyCoverVertical : taskyCoverHorizontal;

  return (
    <Swiper
      className="slider"
      modules={[Navigation, Mousewheel]}
      spaceBetween={8}
      slidesPerView={isThreePreviews ? 3 : 2}
      // navigation
      mousewheel={true}
      // grabCursor={true}
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
          slideCover={taskyCover}
          subtitle="UX/UI design"
          title="Polestar"
        >
          <img src={taskyCoverHorizontal} alt="Project cover" />
        </SwiperSlideContent>
      </SwiperSlide>
      <SwiperSlide className="slider-slide">
        <SwiperSlideContent
          slideCover={taskyCover}
          subtitle="UX/UI design"
          title="Polestar"
        >
          <img src={taskyCoverHorizontal} alt="Project cover" />
        </SwiperSlideContent>
      </SwiperSlide>
      <SwiperSlide className="slider-slide">
        <SwiperSlideContent
          slideCover={taskyCover}
          subtitle="UX/UI design"
          title="Polestar"
        >
          <img src={taskyCoverHorizontal} alt="Project cover" />
        </SwiperSlideContent>
      </SwiperSlide>
      <SwiperSlide className="slider-slide">
        <SwiperSlideContent
          slideCover={taskyCover}
          subtitle="UX/UI design"
          title="Polestar"
        >
          <img src={taskyCoverHorizontal} alt="Project cover" />
        </SwiperSlideContent>
      </SwiperSlide>

      <SwiperSlide></SwiperSlide>
      {isMobile() && <SwiperSlide></SwiperSlide>}
    </Swiper>
  );
};

export default Slider;
