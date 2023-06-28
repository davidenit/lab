'use client';
import { FC, useState } from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';
import { PlusIcon, MinusIcon } from '@/app/assets/images/svg/icons';
interface CounterNumberProductProps {
  handleClose?: () => void;
}

const CounterNumberProduct: FC<CounterNumberProductProps> = ({}) => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <Box className="tw-mt-6">
      <ButtonGroup
        size="small"
        aria-label="small button group"
        className="tw-rounded-sm tw-border-[1px]"
        sx={{
          border: '1px solid var(--colorBorder)',
          '& .MuiButtonBase-root': {
            border: 'none!important',
            '&:hover': {
              border: 'none',
              backgroundColor: 'transparent',
            },
          },
        }}
      >
        <Button
          disabled={counter <= 0}
          onClick={() => {
            setCounter(counter - 1);
          }}
          className="!tw-py-[10px] !tw-px-[15px]"
        >
          <MinusIcon fontSize={20} />
        </Button>
        {
          <Button className="text tw-w-[20px] !tw-py-[10px] !tw-px-[15px] !tw-text-text">
            {counter}
          </Button>
        }
        {
          <Button
            // disabled={counter >= ???}
            onClick={() => {
              setCounter(counter + 1);
            }}
            className="tw-p-[6px] !tw-py-[10px] !tw-px-[15px]"
          >
            <PlusIcon fontSize={20} />
          </Button>
        }
      </ButtonGroup>
    </Box>
  );
};

export default CounterNumberProduct;
