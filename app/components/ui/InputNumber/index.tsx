import { OutlinedInput } from '@mui/material';
import React from 'react';
import styled from './InputNumber.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export interface InputNumber {
  value: number;
  setValue: (value: number | ((prevVar: number) => number)) => void;
}

const InputNumber: React.FC<InputNumber> = ({ value, setValue }) => {
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
  return (
    <OutlinedInput
      id="outlined-adornment-weight"
      startAdornment={
        <RemoveIcon className="tw-cursor-pointer" onClick={handleMinusUnit} />
      }
      endAdornment={
        <AddIcon className="tw-cursor-pointer" onClick={handlePlusUnit} />
      }
      aria-describedby="outlined-weight-helper-text"
      inputProps={{
        'aria-label': 'weight',
        step: '1',
      }}
      type="number"
      sx={{
        borderRadius: '4px',
        border: '1px solid #F5F4F3',
      }}
      classes={{
        root: styled.inputNumber,
      }}
      value={value}
      onChange={handleInput}
    />
  );
};

export default InputNumber;
