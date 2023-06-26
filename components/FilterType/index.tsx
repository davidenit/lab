'use client';
import { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import FilterChip from '@/components/FilterChip';
import AttributeTitle from '@/components/AttributeTitle';
import clsx from 'clsx';

interface FilterTypeProps {
  filterType?: string;
  options: string[];
}

const FilterType: FC<FilterTypeProps> = ({ filterType, options }) => {
  const [filterValue, setFilterValue] = useState<string>('');
  const handleFilterChip = (chip: string) => setFilterValue(chip);
  const handleChangeFilter = () => setFilterValue('');
  return (
    <Box>
      <AttributeTitle
        filterType={filterType}
        filterValue={filterValue}
        handleChangeFilter={handleChangeFilter}
        handleFilterChip={handleFilterChip}
        chips={options}
      />
      {filterValue === '' && (
        <Box className="tw-grid md:tw-grid-cols-3 tw-grid-cols-2 tw-gap-4 tw-flex-wrap tw-w-full">
          {options?.map((chip, index) => (
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
