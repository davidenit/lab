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
        className="tw-rounded-sm "
        sx={{
          border: '1px solid var(--colorBorder)',
        }}
      >
        <Button
          disabled={counter <= 0}
          onClick={() => {
            setCounter(counter - 1);
          }}
          sx={{
            border: 'none!important',
            padding: '10px 15px!important',
            '&:hover': { border: 'none', backgroundColor: 'transparent' },
          }}
        >
          <MinusIcon fontSize={20} />
        </Button>
        {
          <Button
            className="!tw-text-xl tw-w-[20px]"
            sx={{
              border: 'none',
              padding: '10px 15px',
              color: 'var(--colorText)',
              '&:hover': { border: 'none', backgroundColor: 'transparent' },
            }}
          >
            {counter}
          </Button>
        }
        {
          <Button
            // disabled={counter >= ???}
            onClick={() => {
              setCounter(counter + 1);
            }}
            className="tw-p-[6px]"
            sx={{
              border: 'none',
              padding: '10px 15px',
              '&:hover': { border: 'none', backgroundColor: 'transparent' },
            }}
          >
            <PlusIcon fontSize={20} />
          </Button>
        }
      </ButtonGroup>
    </Box>
  );
};

export default CounterNumberProduct;
