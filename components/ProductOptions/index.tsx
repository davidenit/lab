'use client';
import { FC, useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  Select,
  SelectChangeEvent,
  MenuItem,
} from '@mui/material';
import { ChevronRegularDownIcon } from '@/app/assets/images/svg/icons';
import AttributeTitle from '../AttributeTitle';

import clsx from 'clsx';

interface ProductOptionsProps {
  attributeTitle: string;
}

const options = [
  '--Selelct one--',
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
  //write a function to handle change
  return (
    <Box sx={{ minWidth: 120 }} className="tw-mt-8">
      <AttributeTitle filterType={'select filter'} />
      <FormControl className="tw-w-full">
        <Select
          value={option}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className="tw-w-full tw-mt-6 tw-capitalize tw-pr-8 tw-pl-4 tw-text-sm tw-text-[#191817]"
          sx={{
            '& .MuiOutlinedInput-input': {
              padding: '13px 0px',
              color: 'var(--colorTextPlaceholder)',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--colorBorder)',
              color: 'var(--colorText)',
            },
            '& .MuiSelect-iconOutlined': {
              marginRight: '10px',
            },
            '& .MuiOutlinedInput-notchedOutline:hover, &:has(div[aria-expanded="true"]) .MuiOutlinedInput-notchedOutline, &:has(div[aria-expanded="false"]) .MuiOutlinedInput-notchedOutline':
              {
                borderColor: 'var(--colorBorder)',
                borderWidth: '1px',
              },
          }}
          IconComponent={ChevronRegularDownIcon}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              value={option}
              className="tw-capitalize"
              sx={{
                color: 'var(--colorTextPlaceholder)',
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProductOptions;
