/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

type SwipeCategoriesProps = {
  title: string;
};

enum WhichView {
  mobile = 1.5,
  tablet = 2.5,
  desktop = 4,
}

const categoriesForSwiper = [
  { name: 'hairdresser', href: 'http://localhost:3000/#/categories/hairdresser', icon: '../../assets/imgs/logo/colorfullNoFont/book-self_logo.svg' },
  { name: 'barber', href: 'http://localhost:3000/#/categories/barber', icon: '../../assets/imgs/logo/partialcolorNoFont/book-self_logo.svg' },
  { name: 'other', href: 'http://localhost:3000/#/categories/other', icon: '../../assets/imgs/logo/linesNoFont/book-self_logo.svg' },
];

export const SwipeCategories: React.FC<SwipeCategoriesProps> = ({ title }) => {
  const slides = [...categoriesForSwiper];
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
      <div>{title}</div>
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
              <a href={slide.href}>
                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={slide.icon} alt={slide.name} />
                <h3 className="mt-6 text-sm font-medium text-gray-900">{slide.name}</h3>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
