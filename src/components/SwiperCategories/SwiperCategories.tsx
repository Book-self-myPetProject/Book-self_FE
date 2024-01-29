/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

type SwipeCategoriesProps = {
  items: string[];
  title: string;
};

enum WhichView {
  mobile = 1.5,
  tablet = 2.5,
  desktop = 4,
}

export const SwipeCategories: React.FC<SwipeCategoriesProps> = ({ items, title }) => {
  const slides = [...items];
  const [whichView, setWhichView] = useState<WhichView>(1.5);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const handleResize = () => {
    setWhichView(() => {
      if (window.innerWidth <= 639) return WhichView.mobile;
      if (window.innerWidth >= 1200) return WhichView.desktop;
      return WhichView.tablet;
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const slideLeft = () => {
  //   if (swpr) {
  //     swpr.slidePrev();
  //   }
  // };

  // const slideRight = () => {
  //   if (swpr) {
  //     swpr.slideNext();
  //   }
  // };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div>Swiper</div>
      <Swiper
        spaceBetween={16}
        slidesPerView={whichView}
        modules={[Navigation, A11y, Mousewheel, Keyboard]}
        onSwiper={(swpr: SwiperClass) => setSwiper(swpr)}
        mousewheel={true}
        keyboard={true}
        cssMode={true}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              {/* something */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
