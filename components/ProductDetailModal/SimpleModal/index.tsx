import { FC } from 'react';
import ViewDetailProduct from '../ViewDetailProduct';
import ProductInfor from '../ProductInfor';
interface SimpleModalProps {}

const SimpleModal: FC<SimpleModalProps> = ({}) => {
  return (
    <div className="tw-flex tw-gap-10">
      <ViewDetailProduct />
      <ProductInfor />
    </div>
  );
};

export default SimpleModal;
