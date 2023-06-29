import { FC } from 'react';
import Box from '@mui/material/Box';
import { FormControl, NativeSelect, Button } from '@mui/material';
import { ChevronRegularDownIcon } from '@/app/assets/images/svg/icons';
import clsx from 'clsx';
import styles from './styles.module.css';

interface OutlinedSelectProps {
  options: string[];
}

const OutlinedSelect: FC<OutlinedSelectProps> = ({ options }) => {
  return (
    <Box sx={{ width: 80 }}>
      <FormControl fullWidth>
        <NativeSelect
          defaultValue={0}
          IconComponent={ChevronRegularDownIcon}
          className={clsx(styles.select)}
        >
          <option disabled className="text tw-pl-1" value={0}>
            km
          </option>
          {options.map((opt) => (
            <option key={opt} className="text" value={opt}>
              {opt}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default OutlinedSelect;
