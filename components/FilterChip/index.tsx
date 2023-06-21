import { FC } from 'react';
import { Box, Typography } from '@mui/material';
interface FilterChipProps {
  chipName: string;
  handleFilterChip: (chip: string) => void;
}

const FilterChip: FC<FilterChipProps> = ({ chipName, handleFilterChip }) => {
  return (
    <Box
      onClick={() => handleFilterChip(chipName)}
      className="tw-py-[9px] tw-px-4 tw-uppercase tw-rounded tw-cursor-pointer tw-font-[390] tw-text-sm"
      sx={{
        border: '1.5px solid #c6cfe7',
        '&:hover': {
          borderColor: '#f3ccc5',
        },
        '&:active': {
          borderColor: 'var(--colorPrimary)',
        },
      }}
    >
      {chipName}
    </Box>
  );
};

export default FilterChip;
