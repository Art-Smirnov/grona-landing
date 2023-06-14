import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper';
import useScreen from '../hooks/useScreen';
import SwiperSlideContent from './SwiperSlideContent';
import taskyCoverHorizontal from '../images/caseTasky/taskyCoverHorizontal.png';
import taskyCoverVertical from '../images/caseTasky/taskyCoverVertical.png';
import kramCoverHorizontal from '../images/caseKram/kramCoverHorizontal.png';
import kramCoverVertical from '../images/caseKram/kramCoverVertical.png';
import bettingCoverHorizontal from '../images/caseBetting/bettingCoverHorizontal.png';
import bettingCoverVertical from '../images/caseBetting/bettingCoverVertical.png';
import bbqCoverHorizontal from '../images/caseBbqBox/bbqCoverHorizontal.png';
import bbqCoverVertical from '../images/caseBbqBox/bbqCoverVertical.png';

const Slider = () => {
  const { isMobile, screenWidth } = useScreen(575);
  const isThreePreviews = screenWidth >= 1240 || screenWidth < 576;
  const taskyCover = isMobile() ? taskyCoverVertical : taskyCoverHorizontal;
  const kramCover = isMobile() ? kramCoverVertical : kramCoverHorizontal;
  const bettingCover = isMobile()
    ? bettingCoverVertical
    : bettingCoverHorizontal;
  const bbqCover = isMobile() ? bbqCoverVertical : bbqCoverHorizontal;

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
      <SwiperSlide>
        <SwiperSlideContent
          slideCover={bbqCover}
          subtitle="UX/UI Design / Web Development"
          title="BBQ BOX"
          url="bbq-box"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SwiperSlideContent
          slideCover={bettingCover}
          subtitle="UX Research | UX/UI Design"
          title="Wizcric"
          url="wizcric"
        />
      </SwiperSlide>

      <SwiperSlide className="slider-slide">
        <SwiperSlideContent
          slideCover={kramCover}
          subtitle="Design | Development | Testing"
          title="Kram"
          url="kram"
        />
      </SwiperSlide>

      <SwiperSlide className="slider-slide">
        <SwiperSlideContent
          slideCover={taskyCover}
          subtitle="UX/UI design"
          title="Polestar"
          url="polestar"
        />
      </SwiperSlide>

      <SwiperSlide></SwiperSlide>
      {isMobile() && <SwiperSlide></SwiperSlide>}
    </Swiper>
  );
};

export default Slider;
