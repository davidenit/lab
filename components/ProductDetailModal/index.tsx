import { FC } from 'react';
import Container from '@mui/material/Container';
import { CloseIcon } from '@/app/assets/images/svg/icons';
import ViewDetailProduct from './ViewDetailProduct';
import ProductInfor from './ProductInfor';
import { Button, Box } from '@mui/material';
import CounterNumberProduct from '@/components/CounterNumberProduct';
import FilterType from '@/components/FilterType';
import ProductOptions from '@/components/ProductOptions';
import InputMessage from '@/components/InputMessage';
import clsx from 'clsx';
import styles from './styles.module.css';
import {
  attributes,
  delivery,
  description,
  storePickUp,
  productInfor,
} from '../../app/api/mockData';
interface ProductDetailModalProps {
  handleClose?: () => void;
}

const ProductDetailModal: FC<ProductDetailModalProps> = ({ handleClose }) => {
  const filterTypes = attributes.filter((att) => att.type === 'filter');
  const selectTypes = attributes.filter((att) => att.type === 'select');
  return (
    <Container
      maxWidth="lg"
      className={clsx(
        'tw-bg-white tw-w-[70vw] tw-h-[70vh] tw-rounded-md tw-p-8 !tw-pr-0 tw-box-border tw-relative tw-flex tw-gap-10'
      )}
    >
      <Box
        className={clsx(
          'tw-bg-white tw-w-full tw-h-full tw-box-border tw-relative tw-flex tw-gap-10 tw-overflow-y-auto',
          styles.scrollBar
        )}
      >
        <CloseIcon
          onClick={handleClose}
          className="tw-absolute tw-top-0 tw-right-7 tw-cursor-pointer"
          fontSize={14}
        />
        <div className="tw-flex tw-gap-10">
          <ViewDetailProduct
            description={description}
            delivery={delivery}
            storePickUp={storePickUp}
          />
          <Box className="tw-box-border tw-pr-10">
            <ProductInfor productInfor={productInfor} />
            {filterTypes.map((filterType) => (
              <FilterType
                key={filterType.title}
                filterType={filterType.title}
                options={filterType.options}
              />
            ))}
            {selectTypes.map((selectType) => (
              <ProductOptions
                key={selectType.title}
                attributeTitle={selectType.title}
                options={selectType.options}
              />
            ))}
            <InputMessage />
            <CounterNumberProduct />
            <Button
              variant="contained"
              className="tw-uppercase hover:tw-text-primary hover:!tw-bg-white hover:!tw-shadow-none !tw-mt-6 !tw-px-[90px] !tw-py-[12.5px] tw-flex tw-items-center tw-justify-center !tw-font-[450] tw-overflow-hidden notification"
            >
              add to basket
            </Button>
            <p className="!tw-font-[300] notification tw-mb-0 tw-mt-4">
              Egg Tart is available insets of 1
            </p>
          </Box>
        </div>
      </Box>
    </Container>
  );
};

export default ProductDetailModal;
