'use client';
import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import clsx from 'clsx';

interface AttributeTitleProps {
  filterType?: string;
  handleChangeFilter?: () => void;
  handleFilterChip?: (chip: string) => void;
  filterValue?: string;
  chips?: string[];
}

const AttributeTitle: FC<AttributeTitleProps> = ({
  filterType,
  filterValue,
  handleChangeFilter,
  handleFilterChip,
  chips,
}) => {
  return (
    <Box
      className="tw-flex tw-justify-between tw-w-full tw-pb-4 tw-mb-4 tw-mt-6 tw-font-base tw-capitalize"
      sx={{
        borderBottom: '1px solid var(--colorBorder)',
      }}
    >
      <Typography className={clsx('tw-font-[420] tw-font-base')}>
        {filterValue || filterType}
      </Typography>
      {filterValue !== '' && chips && (
        <Typography
          onClick={handleChangeFilter}
          className="tw-text-[#e03155] hover:tw-underline hover:tw-cursor-pointer"
        >
          Change
        </Typography>
      )}
    </Box>
  );
};

export default AttributeTitle;
