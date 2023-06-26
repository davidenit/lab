import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperProps } from 'swiper/react';
import styles from './Swiper.module.css';

interface ICustomeSwiper extends React.PropsWithChildren<SwiperProps> {
  hideNavWithMobile?: boolean;
}

const CustomeSwiper: React.FC<ICustomeSwiper> = (props) => {
  const { children, hideNavWithMobile, className, ...rest } = props;
  return (
    <div className={styles.swiperCommon}>
      <Swiper
        className={`${className || ''} ${
          hideNavWithMobile ? styles['nav-hidden'] : ''
        }`}
        {...rest}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default CustomeSwiper;
export * from 'swiper';
export { SwiperSlide } from 'swiper/react';
