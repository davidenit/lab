import Loading from '@/components/loading';
import { Metadata } from 'next';
import { FC, Suspense } from 'react';
import MyAccountPage from './AccoutPage';

export const metadata: Metadata = {
  title: 'My Profile',
  description: 'My Profile',
};

export const revalidate = 300;

const MyProfile: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <MyAccountPage />
    </Suspense>
  );
};

export default MyProfile;
