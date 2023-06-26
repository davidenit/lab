import { FC } from 'react';
import { Button, Box, GlobalStyles } from '@mui/material';
import Image from 'next/image';
import Product from '@/app/assets/images/svg/Product.png';
import clsx from 'clsx';
import { WishlistHeartIcon } from '@/app/assets/images/svg/icons';
import DescriptionBox from '../../DescriptionBox';

interface ViewDetailProductProps {}

const ViewDetailProduct: FC<ViewDetailProductProps> = ({}) => {
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
    <Box className=" tw-w-[400px]">
      <Box
        className="tw-overflow-hidden tw-relative tw-m-0"
        height={400}
        width={400}
      >
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
        className="tw-w-[400px] !tw-mt-4 tw-uppercase tw-font-[450] notification"
        sx={{
          '&:hover': {
            backgroundColor: 'var(--colorPrimary)',
            color: '#fff',
          },
        }}
      >
        View detail
      </Button>
      <DescriptionBox
        description={description}
        delivery={delivery}
        storePickUp={storePickUp}
      />
    </Box>
  );
};

export default ViewDetailProduct;
