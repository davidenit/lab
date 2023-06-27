import { FC } from 'react';
import { Box } from '@mui/material';
interface PromotiontTagProps {
  contentTag: string;
}

const PromotiontTag: FC<PromotiontTagProps> = ({ contentTag }) => {
  return (
    <Box className="tw-text-primary tw-capitalize tw-bg-tagBackground tw-py-[2px] tw-px-[10px] tw-rounded-[16px] tw-inline-block tw-text-xs tw-mb-4">
      {contentTag}
    </Box>
  );
};

export default PromotiontTag;
