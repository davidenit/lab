import { FC } from 'react';
import { Button, Box, GlobalStyles } from '@mui/material';
import Image from 'next/image';
import Product from '@/app/assets/images/svg/Product.png';
import clsx from 'clsx';
import { WishlistHeartIcon } from '@/app/assets/images/svg/icons';
import DescriptionBox from '../../DescriptionBox';
import { useWindowSize } from 'react-use';

export interface Description {
  question: string;
  answer: string;
}
export interface Shipping {
  availableDay: {
    title: string;
    amount: string;
  };
  availableTime: {
    title: string;
    timeslot: string[];
  };
}

export interface ViewDetailProductProps {
  description: Description[];
  delivery: Shipping;
  storePickUp: Shipping;
}

const ViewDetailProduct: FC<ViewDetailProductProps> = ({
  description,
  delivery,
  storePickUp,
}) => {
  const { width } = useWindowSize();
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
        className="tw-w-full !tw-mt-4 tw-uppercase tw-font-[450] notification hover:tw-text-white hover:!tw-bg-primary"
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
