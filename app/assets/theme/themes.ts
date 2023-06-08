'use client';
import { createTheme } from '@mui/material/styles';
import COLORS from './colors';
export const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: COLORS.colorPrimary,
    },
  },
});
