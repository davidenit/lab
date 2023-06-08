import { Suspense } from 'react';
import Loading from './loading';

const HomePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div>This is the Homepage</div>
    </Suspense>
  );
};

export default HomePage;
