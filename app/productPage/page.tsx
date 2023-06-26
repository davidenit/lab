import { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata: Metadata = {
  title: 'Product page',
  description: 'Product page',
};

const ProductPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div>This is the Productpage</div>
    </Suspense>
  );
};

export default ProductPage;
