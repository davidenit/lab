import React, { FC } from 'react';
import { Button, Box, Typography } from '@mui/material';
import styles from './styles.module.css';
import {
  WishlistUnactiveIcon,
  WishlistActiveIcon,
  DocumentSearchIcon,
  PlusIcon,
} from '@/app/assets/images/svg/icons';
import Image from 'next/image';
import Product from '@/app/assets/images/svg/Product.png';
import clsx from 'clsx';
interface productContainerProps {}

const productContainer: FC<productContainerProps> = ({}) => {
  return (
    <Box
      className="tw-mt-5 tw-flex tw-flex-col tw-rounded-lg tw-bg-[#fff] tw-box-border tw-p-[2px] tw-relative"
      sx={{
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
      }}
    >
      <Box
        className="tw-rounded-t-lg tw-overflow-hidden "
        height={250}
        width={250}
      >
        <Image src={Product} alt="Product" className="tw-h-full tw-w-full" />
      </Box>
      <Box className="tw-absolute tw-group tw-top-4 tw-right-3 tw-cursor-pointer tw-w-[24px] tw-h-[24px]">
        <WishlistActiveIcon
          className="group-hover:tw-flex tw-hidden"
          fontSize={24}
        />
        <WishlistUnactiveIcon
          className="group-hover:tw-hidden tw-flex"
          fontSize={24}
        />
      </Box>
      <Box className="tw-flex tw-justify-between tw-mt-2 tw-mx-4">
        <Typography className="tw-m-0 tw-text-sm">Talam Ubi</Typography>
        <DocumentSearchIcon
          className={clsx(styles.searchIcon, 'tw-cursor-pointer')}
        />
      </Box>
      <Box className="tw-flex tw-mt-[23px] tw-mx-4 ">
        <Typography className="tw-m-0 !tw-text-sm">28.80 SGD</Typography>
        <Typography
          className="tw-m-0 tw-line-through !tw-text-[10px] !tw-ml-2 tw-self-end"
          sx={{
            color: 'var(--colorTextPlaceholder)',
          }}
        >
          32.80 SGD
        </Typography>
      </Box>
      <Box
        className={clsx(
          styles.buttonContainer,
          'tw-flex tw-w-full group tw-justify-center'
        )}
      >
        <Button
          variant="contained"
          className={clsx(
            styles.button,
            'tw-flex tw-box-border !tw-py-[2.5px] tw-justify-center !tw-mt-[14.5px] !tw-mb-[10px] tw-text-sm tw-rounded tw-self-center'
          )}
          sx={{
            width: 'calc(100% - 16px)',
            border: '2px solid var(--colorPrimary)',
            fontWeight: 450,
          }}
        >
          ADD
          <PlusIcon className={clsx(styles.plusIcon, 'tw-stroke-[#fff]')} />
        </Button>
      </Box>
    </Box>
  );
};

export default productContainer;
