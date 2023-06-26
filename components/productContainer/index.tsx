'use client';
import React, { FC, useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import ProductPrice from '@/components/ProductPrice';
import {
  WishlistHeartIcon,
  DocumentSearchIcon,
  PlusIcon,
} from '@/app/assets/images/svg/icons';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import Product from '@/app/assets/images/svg/Product.png';
import clsx from 'clsx';
import ProductDetailModal from '@/components/ProductDetailModal';

interface productContainerProps {
  productId?: string;
}

const ProductContainer: FC<productContainerProps> = ({ productId }) => {
  const [active, setActive] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const ADD_TO_WISHLIST_MUTATION = gql`
  //   mutation AddToWishlist($productId: ID!) {
  //     addToWishlist(productId: $productId) {
  //       id
  //     }
  //   }
  // `;
  // const [addToWishlistMutation] = useMutation(ADD_TO_WISHLIST_MUTATION);
  // const handleAddToWishlist = (productId: string) => {
  //   addToWishlistMutation({
  //     variables: {
  //       productId: productId,
  //     },
  //   });
  // };
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
        <WishlistHeartIcon
          className="group-hover:tw-stroke-primary group-hover:tw-fill-primary"
          fontSize={24}
          // onClick={() => handleAddToWishlist(productId)}
        />
      </Box>
      <Box className="tw-flex tw-justify-between tw-mt-2 tw-mx-4">
        <Typography className="tw-m-0 tw-text-sm">Talam Ubi</Typography>
        <DocumentSearchIcon
          onClick={handleOpen}
          fontSize={24}
          className="tw-cursor-pointer hover:tw-stroke-primary tw-stroke-[#7e7e7e] tw-stroke-2"
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="tw-flex tw-items-center tw-justify-center"
        >
          <ProductDetailModal handleClose={handleClose} />
        </Modal>
      </Box>
      <ProductPrice price={28.8} discount={32.8} className="notification" />
      <Button
        variant="contained"
        className="tw-flex tw-box-border tw-group !tw-py-[2.5px] tw-justify-center !tw-mt-[14.5px] !tw-mb-[10px] tw-text-sm tw-rounded tw-self-center "
        sx={{
          width: 'calc(100% - 16px)',
          outline: '2px solid var(--colorPrimary)',
          fontWeight: 450,
          '&:hover': {
            backgroundColor: '#fff',
            color: 'var(--colorPrimary)',
            boxShadow: 'none',
          },
        }}
      >
        ADD
        <PlusIcon className="tw-stroke-[#fff] group-hover:tw-stroke-primary" />
      </Button>
    </Box>
  );
};

export default ProductContainer;
