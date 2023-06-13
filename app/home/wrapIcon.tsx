'use client';
import { Box } from '@mui/material';
import { SuccessIcon } from '../assets/images/svg/icons';
import COLORS from '../assets/theme/colors';

const WrapIcon = () => {
  return (
    <Box>
      <SuccessIcon fontSize={64} color={COLORS.colorSuccess} />
    </Box>
  );
};

export default WrapIcon;
