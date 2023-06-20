import { FC } from 'react';
import { Button, Box, Typography } from '@mui/material';

interface ProductInforProps {}

const ProductInfor: FC<ProductInforProps> = ({}) => {
  return (
    <Box className="tw-flex-1">
      <Typography className="tw-font-semibold">Kueh Lapis</Typography>
      <Typography className="tw-font-semibold">Kueh Lapis</Typography>
      <Typography>SGD 78.00</Typography>
      <Button
        variant="contained"
        className="tw-uppercase !tw-px-[90px] !tw-py-[12.5px] tw-flex tw-items-center tw-justify-center"
      >
        add to basket
      </Button>
      <Typography className="tw-font-semibold">
        Egg Tart is available insets of 1
      </Typography>
    </Box>
  );
};

export default ProductInfor;
