import { FC } from 'react';
import { Button, Box, GlobalStyles } from '@mui/material';
import Image from 'next/image';
import Product from '@/app/assets/images/svg/Product.png';
import clsx from 'clsx';
import { WishlistHeartIcon } from '@/app/assets/images/svg/icons';
import DescriptionBox from '../../DescriptionBox';
import { useWindowSize } from 'react-use';

interface ViewDetailProductProps {}

const ViewDetailProduct: FC<ViewDetailProductProps> = ({}) => {
  const { width } = useWindowSize();
  const description = [
    {
      question: " What's the big idea",
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun lore magna aliqua. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      question: 'What are the benefits?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun lore magna aliqua. ',
    },
    {
      question: 'Great for...',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun lore magna aliqua.',
    },
  ];
  const delivery = {
    availableDay: {
      title: 'Available for delivery:',
      amount: '2 days',
    },
    availableTime: {
      title: 'Available timeslot:',
      timeslot: ['1:00 PM - 4:00 PM', '3:00 PM - 6:00 PM', '6:00 PM - 8:00 PM'],
    },
  };
  const storePickUp = {
    availableDay: {
      title: 'Available for pickup:',
      amount: '2 days',
    },
    availableTime: {
      title: 'Available timeslot:',
      timeslot: ['1:00 PM - 4:00 PM', '3:00 PM - 6:00 PM', '6:00 PM - 8:00 PM'],
    },
  };
  return (
    <Box className="lg:tw-w-[400px] md:tw-w-[300px] tw-w-full tw-border-box md:tw-pr-0">
      <Box className="tw-overflow-hidden tw-relative tw-m-0 lg:tw-w-[400px] md:tw-w-[300px]">
        <Image src={Product} alt="Product" className="tw-h-full tw-w-full" />
        <Box className="tw-absolute tw-group tw-top-5 tw-right-5 tw-cursor-pointer tw-w-[30px] tw-h-[30px]">
          <WishlistHeartIcon
            className={clsx(
              'group-hover:tw-stroke-primary group-hover:tw-fill-primary'
            )}
            fontSize={24}
          />
        </Box>
      </Box>
      <GlobalStyles
        styles={{
          '.MuiButton-root': {
            border: '2px solid var(--colorPrimary)!important',
          },
        }}
      />
      <Button
        variant={'outlined'}
        color="primary"
        className="tw-w-full !tw-mt-4 tw-uppercase tw-font-[450] notification"
        sx={{
          '&:hover': {
            backgroundColor: 'var(--colorPrimary)',
            color: '#fff',
          },
        }}
      >
        View detail
      </Button>
      {width > 480 && (
        <DescriptionBox
          description={description}
          delivery={delivery}
          storePickUp={storePickUp}
        />
      )}
    </Box>
  );
};

export default ViewDetailProduct;
