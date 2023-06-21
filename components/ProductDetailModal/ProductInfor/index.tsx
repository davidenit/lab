import { FC } from 'react';
import { Button, Box, Typography } from '@mui/material';
import ProductPrice from '@/components/ProductPrice';
import CounterNumberProduct from '@/components/CounterNumberProduct';
interface ProductInforProps {}

const ProductInfor: FC<ProductInforProps> = ({}) => {
  return (
    <Box className="tw-flex-1 tw-flex-col ">
      <Typography
        className="!tw-text-[32px] tw-leading-[120%] tw-font-normal"
        sx={{
          color: 'var(--textColorPrimary)',
          fontFamily: 'Philosopher',
        }}
      >
        Kueh Lapis
      </Typography>
      <Typography className="tw-font-[300] tw-text-sm tw-leading-[120%] tw-mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididun lore magna aliqua. Ut enim ad minim veniam. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur.
      </Typography>
      <ProductPrice
        price={34.8}
        discount={35.8}
        classNamePrice="!tw-text-2xl"
        className="!tw-mt-6 !tw-ml-0"
        classNameDiscount="!tw-text-base !tw-text-[#191817] !tw-font-[390]"
      />
    </Box>
  );
};

export default ProductInfor;
