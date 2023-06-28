import Loading from '@/components/loading';
import { Metadata } from 'next';
import { FC, Suspense } from 'react';
import MyOrderPage from './MyOrder';

export const metadata: Metadata = {
  title: 'My Order',
  description: 'My Order',
};

// export const revalidate = 300;

const MyOrder: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <MyOrderPage />
    </Suspense>
  );
};

export default MyOrder;
