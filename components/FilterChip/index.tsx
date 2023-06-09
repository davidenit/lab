import { FC } from 'react';
import { Box } from '@mui/material';
interface FilterChipProps {
  chipName: string;
  handleFilterChip: (chip: string) => void;
}

const FilterChip: FC<FilterChipProps> = ({ chipName, handleFilterChip }) => {
  return (
    <Box
      onClick={() => handleFilterChip(chipName)}
      className="tw-py-[9px] tw-px-4 tw-uppercase tw-rounded tw-cursor-pointer tw-font-[390] notification"
      sx={{
        border: '1.5px solid var(--colorBorderChip)',
        '&:hover': {
          borderColor: 'var(--colorTagBg)',
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
