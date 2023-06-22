'use client';
import { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import FilterChip from '@/components/FilterChip';
import AttributeTitle from '@/components/AttributeTitle';
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
      <AttributeTitle
        filterType={filterType}
        filterValue={filterValue}
        handleChangeFilter={handleChangeFilter}
        handleFilterChip={handleFilterChip}
        chips={chips}
      />
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
