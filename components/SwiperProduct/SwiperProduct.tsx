import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';
// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';

const SwiperProduct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const isMobile = useMediaQuery('(max-width:768px)');
  const products = [
    'https://www.southernliving.com/thmb/6jANEFrMvwSWlRlxCDCzulxXQZY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2641101_Funfetti_Cake_702-2000-a2d8f835fd8f4a928fa17222e71241c3.jpg',
    'https://d2sbytayo4rkgk.cloudfront.net/eyJidWNrZXQiOiJwcm9kLWZlcmd1c29ucGxhcnJlLWFzc2V0cyIsImtleSI6ImNhdGFsb2cvcHJvZHVjdC9wL2kvcGluYXRhX2Nha2Vfd2l0aF9zbGljZV93ZWIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=',
    'https://www.southernliving.com/thmb/6jANEFrMvwSWlRlxCDCzulxXQZY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2641101_Funfetti_Cake_702-2000-a2d8f835fd8f4a928fa17222e71241c3.jpg',
  ];
  return (
    <Box className="tw-w-full tw-h-auto">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mySwiper2 tw-w-full !tw-h-[448px]"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <img src={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      {!isMobile && (
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={8}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Pagination]}
          className="mySwiper !tw-h-[144px] tw-mt-4"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <img src={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
};

export default SwiperProduct;
