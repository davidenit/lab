'use client';
import Filter from '@/components/product-list/Filter';
import { Box, Button, Grid } from '@mui/material';
import Image from 'next/image';
import Search from './assets/images/svg/Search.svg';
import { SearchIcon } from './assets/images/svg/icons';
import PriceSlider from '../components/PriceSlider';
import ProductContainer from '../components/ProductContainer';
import BasicDatePicker from './components/ui/DatePicker';
import { CustomizedSteppers } from './components/ui/CustomeStepper';
import YouTube, { YouTubeProps } from 'react-youtube';
import CustomeNumberInput from './components/ui/CustomeNumberInput';
import Footer from './components/ui/Footer';

export default function Home() {
  return (
    <>
      <Grid
        container
        height="100vh"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        {/* <h1>Using Material UI with Next.js 13 and Tailwind</h1>
        <Box>
          <Image src={Search} alt="Search" height={24} width={24} />
          <SearchIcon fontSize={24} />
        </Box>
        <Box className="tw-grid tw-grid-cols-3 tw-gap-2">
          <Button variant="text">Text</Button>
          <Button variant="contained" size="large" className="tw-uppercase">
            create account
          </Button>
          <Button variant="outlined" size="large" className="tw-uppercase">
            continue as guest
          </Button>
        </Box>
        <BasicDatePicker />
        <CustomizedSteppers />
        <YouTube videoId="63jACiwo61c" opts={opts} onReady={onPlayerReady} /> */}
        {/* <CustomeNumberInput /> */}
        <PriceSlider />
        <ProductContainer />
      </Grid>
      <Footer />
    </>
  );
}
