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
  attributeTitle?: string;
  options: string[];
  className?: string;
}

const ProductOptions: FC<ProductOptionsProps> = ({
  attributeTitle,
  options,
  className,
}) => {
  const [option, setOption] = useState<string>(options[0]);
  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }} className={clsx('', className)}>
      {attributeTitle && <AttributeTitle filterType={attributeTitle} />}
      <FormControl className="tw-w-full">
        <Select
          value={option}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className={clsx(
            'tw-w-full tw-capitalize tw-pr-8 tw-pl-4 notification tw-text-text',
            styles.select
          )}
          IconComponent={ChevronRegularDownIcon}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              value={option}
              className="tw-capitalize tw-text-text notification"
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
