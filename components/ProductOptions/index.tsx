'use client';
import { FC, useState } from 'react';
import {
  Box,
  FormControl,
  Select,
  SelectChangeEvent,
  MenuItem,
} from '@mui/material';
import { ChevronRegularDownIcon } from '@/app/assets/images/svg/icons';
import AttributeTitle from '../AttributeTitle';
import styles from './styles.module.css';
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

  return (
    <Box sx={{ minWidth: 120 }} className="tw-mt-8">
      <AttributeTitle filterType={'select filter'} />
      <FormControl className="tw-w-full">
        <Select
          value={option}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className={clsx(
            'tw-w-full tw-mt-6 tw-capitalize tw-pr-8 tw-pl-4 tw-text-sm tw-text-text',
            styles.select
          )}
          IconComponent={ChevronRegularDownIcon}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              value={option}
              className="tw-capitalize tw-text-text"
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
