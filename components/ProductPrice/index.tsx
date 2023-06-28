import { FC } from 'react';
import { Box } from '@mui/material';
import clsx from 'clsx';

interface ProductPriceProps {
  price: number;
  discount?: number;
  className?: string;
  classNamePrice?: string;
  classNameDiscount?: string;
}

const ProductPrice: FC<ProductPriceProps> = ({
  price,
  discount,
  className,
  classNamePrice,
  classNameDiscount,
}) => {
  return (
    <Box className={clsx('tw-flex tw-mt-[23px] tw-mx-4', className)}>
      <p className={clsx('tw-m-0', classNamePrice)}>
        {price.toFixed(2)} <span>SGD</span>
      </p>
      <p
        className={clsx(
          'tw-m-0 tw-line-through tw-ml-2 tw-self-end tw-text-grey',
          classNameDiscount
        )}
      >
        {discount?.toFixed(2)} <span>SGD</span>
      </p>
    </Box>
  );
};

export default ProductPrice;
