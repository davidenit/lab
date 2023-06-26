import { OutlinedInput } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';
import styled from './InputNumberWithImage.module.css';

export interface InputNumberWithImage {
  value: number;
  setValue: (value: number | ((prevVar: number) => number)) => void;
  unit: string;
  imageUrl: string;
}

const InputNumberWithImage: React.FC<InputNumberWithImage> = ({
  value,
  setValue,
  unit,
  imageUrl,
}) => {
  const handlePlusUnit = () => {
    setValue((prevVar: number) => prevVar + 1);
  };
  const handleMinusUnit = () => {
    if (value !== 0) {
      setValue((prevVar: number) => prevVar - 1);
    }
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value);
  };
  const controlSection = (
    <div className="tw-flex tw-flex-col">
      <KeyboardArrowUpIcon
        className="tw-cursor-pointer tw-align-middle"
        onClick={handlePlusUnit}
      />
      <KeyboardArrowDownIcon
        className="tw-cursor-pointer"
        onClick={handleMinusUnit}
      />
    </div>
  );
  const unitSection = (
    <div className="tw-h-full -tw-mr-[14px] tw-bg-[#F5F4F3] tw-px-[14px] tw-text-center">
      <p>{unit}</p>
    </div>
  );
  return (
    <div className="tw-flex">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="tw-w-14 tw-h-14 tw-bg-no-repeat tw-bg-center"
      ></div>
      <OutlinedInput
        id="outlined-adornment-weight"
        startAdornment={controlSection}
        endAdornment={unitSection}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
          step: '1',
        }}
        type="number"
        value={value}
        onChange={handleInput}
        classes={{
          root: styled.inputNumber,
        }}
        sx={{
          borderRadius: '4px',
          border: '1px solid #F5F4F3',
        }}
      />
    </div>
  );
};

export default InputNumberWithImage;
