import { FC } from 'react';
import { Box } from '@mui/material';
import ProductPrice from '@/components/ProductPrice';
import PromotiontTag from '@/components/PromotionTag';
import Tags from '@/components/Tags';
import clsx from 'clsx';
import styles from './styles.module.css';
import DiscriptionBox from '../../DescriptionBox/index';
interface ProductInforProps {
  productInfor: Infor;
}
interface Infor {
  promotion?: string;
  name: string;
  description: string;
  price: number;
  priceDiscount?: number;
  tags?: string;
}

const ProductInfor: FC<ProductInforProps> = ({ productInfor }) => {
  const { promotion, name, description, price, priceDiscount, tags } =
    productInfor;

  return (
    <Box className="tw-flex-1 tw-flex-col ">
      <PromotiontTag contentTag={promotion || ''} />
      <p className={clsx(styles.productName, 'heading2 tw-m-0')}>{name}</p>
      <p className="tw-font-[300] notification tw-mt-4">{description}</p>
      <Tags tagConent={tags || ''} />
      <ProductPrice
        price={price}
        discount={priceDiscount}
        classNamePrice="heading3"
        className="!tw-mt-6 !tw-ml-0 heading2"
        classNameDiscount="text !tw-text-text !tw-font-[390]"
      />
    </Box>
  );
};

export default ProductInfor;
