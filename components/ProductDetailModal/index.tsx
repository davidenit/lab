import { FC } from 'react';
import Container from '@mui/material/Container';
import SimpleModal from './SimpleModal';
import { CloseIcon } from '@/app/assets/images/svg/icons';

interface ProductDetailModalProps {}

const ProductDetailModal: FC<ProductDetailModalProps> = ({}) => {
  return (
    <Container
      maxWidth="lg"
      className="tw-bg-[#fff] tw-w-[70vw] tw-h-[70vh] tw-rounded-md !tw-p-8 tw-box-border tw-relative"
    >
      <CloseIcon
        className="tw-absolute tw-top-7 tw-right-7 tw-cursor-pointer"
        fontSize={14}
      />
      <SimpleModal />
    </Container>
  );
};

export default ProductDetailModal;
