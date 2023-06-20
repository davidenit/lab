'use client';
import React, { useState, FC } from 'react';
import { Box, Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import { ChevrondownIcon } from '@/app/assets/images/svg/icons';
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

  const TextWapperCss = {
    color: 'var(--colorText)',
    fontWeight: '420',
    fontSize: '10px',
    padding: '4px 17.5px ',
    backgroundColor: 'var( --colorBgDefault)',
    borderRadius: '2px',
  };
  return (
    <Box sx={{ width: '256px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          id="range-slider"
          sx={{
            color: 'var(--colorText)',
            fontSize: '18px',
            fontWeight: 420,
            fontFamily: 'Brandon Grotesque',
          }}
        >
          Price Range
        </Typography>
        <Box>
          <ChevrondownIcon
            className={`${isShowed ? 'tw-rotate-180' : ''} tw-cursor-pointer`}
            onClick={() => setIsShowed(!isShowed)}
          />
        </Box>
      </Box>
      {isShowed && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '29px',
          }}
        >
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
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '16px',
            }}
          >
            <Box sx={TextWapperCss}>
              <p className="tw-w-[60px] tw-m-0"> {value[0].toFixed(2)} SGD</p>
            </Box>
            <Box sx={TextWapperCss}>
              <p className="tw-w-[60px] tw-m-0"> {value[1].toFixed(2)} SGD</p>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PriceSlider;
