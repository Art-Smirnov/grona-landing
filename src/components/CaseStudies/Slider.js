import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper';
import useScreen from '../hooks/useScreen';
import SwiperSlideContent from './SwiperSlideContent';
import { SLIDE_ITEMS } from '../constants/slideItems';

const Slider = () => {
  const { isMobile, screenWidth } = useScreen(575);
  const isThreePreviews = screenWidth >= 1240 || screenWidth < 576;

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
      {SLIDE_ITEMS.map(({ slideCover, subtitle, title, url }, index) => {
        return (
          <SwiperSlide key={index}>
            <SwiperSlideContent
              slideCover={slideCover}
              subtitle={subtitle}
              title={title}
              url={url}
            />
          </SwiperSlide>
        );
      })}

      <SwiperSlide></SwiperSlide>
      {isMobile() && <SwiperSlide></SwiperSlide>}
    </Swiper>
  );
};

export default Slider;
