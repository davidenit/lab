'use client';
import { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import FilterChip from '@/components/FilterChip';
import clsx from 'clsx';

interface FilterTypeProps {
  filterType?: string;
}

const FilterType: FC<FilterTypeProps> = ({ filterType }) => {
  const [filterValue, setFilterValue] = useState<string>('');
  const handleFilterChip = (chip: string) => setFilterValue(chip);
  const chips = [
    'black forest',
    'chocolate',
    'strawberry',
    'vanilla',
    'blueberry',
    'cheese',
    'lemon',
    'mango',
    'orange',
    'pineapple',
  ];
  const handleChangeFilter = () => setFilterValue('');
  return (
    <Box>
      <Box
        className="tw-flex tw-justify-between tw-w-full tw-pb-4 tw-mb-4 tw-mt-6 tw-font-base tw-capitalize"
        sx={{
          borderBottom: '1px solid var(--colorBorder)',
        }}
      >
        <Typography
          className={clsx('tw-font-[420] tw-font-base', {
            'tw-capitalize': filterValue === '',
            'tw-uppercase': filterValue !== '',
          })}
        >
          {filterValue || filterType}
        </Typography>
        {filterValue !== '' && (
          <Typography
            onClick={handleChangeFilter}
            className="tw-text-[#e03155] hover:tw-underline hover:tw-cursor-pointer"
          >
            Change
          </Typography>
        )}
      </Box>
      {filterValue === '' && (
        <Box className="tw-grid tw-grid-cols-3 tw-gap-4 tw-flex-wrap tw-w-full">
          {chips?.map((chip, index) => (
            <FilterChip
              key={index}
              chipName={chip}
              handleFilterChip={handleFilterChip}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FilterType;
