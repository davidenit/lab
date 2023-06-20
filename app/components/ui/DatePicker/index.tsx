import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import COLORS from '@/app/assets/theme/colors';

export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          format="DD-MM-YYYY"
          slotProps={{
            layout: {
              sx: {
                '.MuiPickersDay-today': {
                  border: '0 !important',
                  color: COLORS.colorPrimary,
                },
                '.MuiPickersDay-today:focus': {
                  borderRadius: '8px !important',
                },
                '.Mui-selected': {
                  background: COLORS.colorPrimary,
                  color: 'white',
                  borderRadius: '8px',
                },
                '.Mui-selected:hover': {
                  willChange: 'background-color',
                  backgroundColor: 'rgb(156, 34, 59) !important',
                },
                '.MuiPickersDay-root:hover': {
                  backgroundColor: 'rgba(224, 49, 85, 0.04)',
                  borderRadius: '8px',
                },
              },
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
