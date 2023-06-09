'use client';
import { createTheme } from '@mui/material/styles';
import COLORS from './colors';
export const darkTheme = createTheme({
  typography: {
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Brandon"'].join(','),
  },
  palette: {
    mode: 'light',
    primary: {
      main: COLORS.colorPrimary,
    },
    text: {
      primary: COLORS.colorText,
      disabled: COLORS.colorTextDisabled,
    },
    success: {
      main: COLORS.colorSuccess,
    },
    warning: {
      main: COLORS.colorWarning,
    },
    error: {
      main: COLORS.colorError,
    },
  },
});
