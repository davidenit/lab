import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import clsx from 'clsx';

interface ProductPriceProps {
  price: number;
  discount?: number;
  className?: string;
  classNamePrice?: string;
  classNameDiscount?: string;
}

const ProductPrice: FC<ProductPriceProps> = (props: ProductPriceProps) => {
  const { price, discount, className, classNamePrice, classNameDiscount } =
    props;
  return (
    <Box className={clsx('tw-flex tw-mt-[23px] tw-mx-4', className)}>
      <Typography className={clsx('tw-m-0', classNamePrice)}>
        {price.toFixed(2)} <span>SGD</span>
      </Typography>
      <Typography
        className={clsx(
          'tw-m-0 tw-line-through !tw-text-[0.625rem] !tw-ml-2 tw-self-end',
          classNameDiscount
        )}
        sx={{
          color: 'var(--colorTextPlaceholder)',
        }}
      >
        {discount?.toFixed(2)} <span>SGD</span>
      </Typography>
    </Box>
  );
};

export default ProductPrice;
