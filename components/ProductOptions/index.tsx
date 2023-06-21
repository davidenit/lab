'use client';
import { FC, useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  Select,
  SelectChangeEvent,
  MenuItem,
  InputLabel,
  GlobalStyles,
  FormHelperText,
} from '@mui/material';
import clsx from 'clsx';

interface ProductOptionsProps {
  attributeTitle: string;
}

const options = [
  //   'selelct one',
  'black forest',
  'chocolate',
  'strawberry',
  'vanilla',
  'blueberry',
];
const ProductOptions: FC<ProductOptionsProps> = ({ attributeTitle }) => {
  const [option, setOption] = useState<string>(options[0]);
  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 120 }} className="tw-mt-8">
      {/* <GlobalStyles
      styles={{ fieldset: { borderColor: 'var(--colorPrimary) !important' } }}
      /> */}
      <Typography className={clsx('tw-font-[420] tw-font-base tw-capitalize')}>
        {attributeTitle}
      </Typography>
      <FormControl className="tw-w-full">
        <Select
          value={option}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className="tw-w-full tw-mt-6 tw-capitalize tw-pr-8 tw-pl-4 tw-text-sm"
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--colorBorder)',
            },
            '& .MuiOutlinedInput-notchedOutline:hover': {
              borderColor: 'var(--colorBorder)',
            },
            '&:has(div[aria-expanded="true"]) .MuiOutlinedInput-notchedOutline':
              {
                borderColor: 'var(--colorBorder)',
              },
            '&:has(div[aria-expanded="false"]) .MuiOutlinedInput-notchedOutline':
              {
                borderColor: 'var(--colorBorder)',
              },
          }}
        >
          <MenuItem disabled value="">
            <em>--Please Select--</em>
          </MenuItem>
          {options.map((option, index) => (
            <MenuItem key={option} value={option} className="tw-capitalize">
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProductOptions;
