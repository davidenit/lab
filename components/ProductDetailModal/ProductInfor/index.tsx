import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import ProductPrice from '@/components/ProductPrice';
import PromotiontTag from '@/components/PromotionTag';
import Tags from '@/components/Tags';
interface ProductInforProps {}

const ProductInfor: FC<ProductInforProps> = ({}) => {
  return (
    <Box className="tw-flex-1 tw-flex-col ">
      <PromotiontTag contentTag="sale" />
      <Typography
        className="heading2"
        sx={{
          fontFamily: 'Philosopher',
        }}
      >
        Kueh Lapis
      </Typography>
      <Typography className="tw-font-[300] notification tw-mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididun lore magna aliqua. Ut enim ad minim veniam. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur.
      </Typography>
      <Tags tagConent="Cake, Signature Range" />
      <ProductPrice
        price={34.8}
        discount={35.8}
        classNamePrice="heading3"
        className="!tw-mt-6 !tw-ml-0 heading2"
        classNameDiscount="text !tw-text-text !tw-font-[390]"
      />
    </Box>
  );
};

export default ProductInfor;
