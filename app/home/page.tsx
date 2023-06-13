import { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from './loading';
import WrapIcon from './wrapIcon';

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Home page',
};

const HomePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div>This is the Homepage</div>
      <WrapIcon />
    </Suspense>
  );
};

export default HomePage;
