'use client';
import { Box, Button, Grid } from '@mui/material';
import Image from 'next/image';
import Search from './assets/images/svg/Search.svg';
import { SearchIcon } from './assets/images/svg/icons';
import BasicDatePicker from './components/ui/DatePicker';
import { CustomizedSteppers } from './components/ui/CustomeStepper';
import YouTube, { YouTubeProps } from 'react-youtube';
import Footer from './components/ui/Footer';
import { useRef, useState } from 'react';
import InputNumberWithImage from './components/ui/InputNumberWithImage';
import InputNumber from './components/ui/InputNumber';
import CustomeSwiper, {
  Navigation,
  Pagination,
  SwiperSlide,
  Thumbs,
  Swiper as SwiperType,
} from './components/ui/Swiper';
import { SWIPER_BREAKPOINT } from './components/ui/helper';

export default function Home() {
  const test = <div className="tw-w-64 tw-h-64 tw-bg-primary"></div>;
  const swiperRef = useRef<SwiperType>();

  const testArray = Array.from({ length: 9 }, (_, index) => (
    <div key={index}>{test}</div>
  ));
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <>
      <Grid
        container
        height="100vh"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <h1>Using Material UI with Next.js 13 and Tailwind</h1>
      </Grid>
      <div className="tw-mx-14">
        <CustomeSwiper
          modules={[Pagination, Navigation, Thumbs]}
          navigation
          pagination={{ clickable: true }}
          hideNavWithMobile
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={10}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {testArray.map((test: any, index: number) => (
            <SwiperSlide className=" even:tw-opacity-70" key={index}>
              {test}
            </SwiperSlide>
          ))}
        </CustomeSwiper>
        <CustomeSwiper
          onSwiper={setThumbsSwiper}
          modules={[Pagination, Navigation, Thumbs]}
          navigation
          pagination={{ clickable: true }}
          hideNavWithMobile
          spaceBetween={10}
          slidesPerView={4}
        >
          {testArray.map((test: any, index: number) => (
            <SwiperSlide className=" even:tw-opacity-70" key={index}>
              {test}
            </SwiperSlide>
          ))}
        </CustomeSwiper>
        <div>
          <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
          <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
