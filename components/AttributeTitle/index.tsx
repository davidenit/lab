'use client';
import { FC } from 'react';
import { Box } from '@mui/material';
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
      className="tw-flex tw-justify-between tw-w-full tw-pb-4 md:tw-mb-4 tw-mb-3 md:tw-mt-6 tw-mt-4 text tw-capitalize"
      sx={{
        borderBottom: '1px solid var(--colorBorder)',
      }}
    >
      <p className={clsx('!tw-font-[420] text tw-mb-0')}>
        {filterValue || filterType}
      </p>
      {filterValue !== '' && chips && (
        <p
          onClick={handleChangeFilter}
          className="tw-text-primary hover:tw-underline hover:tw-cursor-pointer text tw-mb-0"
        >
          Change
        </p>
      )}
    </Box>
  );
};

export default AttributeTitle;
