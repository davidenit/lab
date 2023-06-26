'use client';
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import { ChevrondownIcon } from '@/app/assets/images/svg/icons';
import clsx from 'clsx';
import styles from './styles.module.css';

interface priceSliderProps {}

const PriceSlider = ({}: priceSliderProps) => {
  const [value, setValue] = useState<number[]>([10, 100]);
  const [isShowed, setIsShowed] = useState<boolean>(false);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const customStyleSlider = {
    color: '#FFFFFF',
    padding: 0,
    '& .MuiSlider-thumb': {
      height: 20,
      width: 20,
      backgroundColor: 'var(--colorText)',
      borderRadius: '50%',
      border: '2px solid currentColor',
      '&:hover, &.Mui-focusVisible': {
        boxShadow: 'none',
      },
      '&.Mui-active': {
        boxShadow: 'none',
      },
    },
    '& .MuiSlider-track': {
      backgroundColor: 'var(--colorText)',
      height: '5px',
    },
    '& .MuiSlider-rail': {
      backgroundColor: 'var(--colorBorder)',
      borderRadius: 0,
      height: '5px',
    },
  };

  return (
    <Box sx={{ width: '256px' }}>
      <Box className="tw-flex tw-justify-between tw-items-center">
        <Typography id="range-slider" className="text">
          Price Range
        </Typography>
        <Box>
          <ChevrondownIcon
            className={clsx({ 'tw-rotate-180': isShowed }, 'tw-cursor-pointer')}
            onClick={() => setIsShowed(!isShowed)}
          />
        </Box>
      </Box>
      {isShowed && (
        <Box className="tw-flex tw-flex-col tw-mt-[29px]">
          <Slider
            value={value}
            onChange={handleChange}
            getAriaLabel={() => 'Temperature range'}
            aria-labelledby="range-slider"
            min={0.1}
            max={150}
            valueLabelDisplay="off"
            color={'primary'}
            sx={customStyleSlider}
            className={clsx(styles.slider)}
          />
          <Box className="tw-flex tw-justify-between tw-mt-4">
            <Box className={clsx(styles.priceWrapper)}>
              <p className="tw-w-[60px] tw-m-0"> {value[0].toFixed(2)} SGD</p>
            </Box>
            <Box className={clsx(styles.priceWrapper)}>
              <p className="tw-w-[60px] tw-m-0"> {value[1].toFixed(2)} SGD</p>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PriceSlider;
