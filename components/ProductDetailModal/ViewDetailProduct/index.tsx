import { FC, useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import Image from 'next/image';
import Product from '@/app/assets/images/svg/Product.png';
import clsx from 'clsx';
import { WishlistHeartIcon, CloseIcon } from '@/app/assets/images/svg/icons';
interface ViewDetailProductProps {}

const ViewDetailProduct: FC<ViewDetailProductProps> = ({}) => {
  return (
    <Box className="">
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
      <Button
        variant={'outlined'}
        color="primary"
        className="tw-w-[400px] !tw-mt-4 tw-text-sm tw-uppercase"
        sx={{
          fontWeight: 450,
          '&:hover': {
            backgroundColor: 'var(--colorPrimary)',
            color: '#fff',
          },
        }}
      >
        View detail
      </Button>
    </Box>
  );
};

export default ViewDetailProduct;
