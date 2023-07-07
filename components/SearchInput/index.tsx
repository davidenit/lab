import { FC, useState, ChangeEvent } from 'react';
import { FormControl, InputAdornment, TextField } from '@mui/material';
import { SearchIcon } from '@/app/assets/images/svg/icons';
import clsx from 'clsx';
import styles from './styles.module.css';
interface SearchInputProps {
  handleSearch: (value: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ handleSearch }) => {
  return (
    <FormControl className={clsx(styles.inputContainer, 'tw-w-full ')}>
      <TextField
        size="small"
        variant="outlined"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleSearch(e.target.value)
        }
        placeholder="Search location"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default SearchInput;
