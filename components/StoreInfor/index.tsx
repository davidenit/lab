import { FC } from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import { ClockIcon } from '@/app/assets/images/svg/icons';
import { StoreInfor as Store } from '../StoreLocation';
interface StoreInforProps {
  store: Store;
  handlePickStore: (store: Store) => void;
}

const StoreInfor: FC<StoreInforProps> = ({ store, handlePickStore }) => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-2">
      <div className="tw-flex tw-gap-6">
        <img width={150} height={150} src={store.imageUrl} alt="store image" />
        <div className="tw-flex tw-flex-col tw-gap-4 text">
          <p className="body2 !tw-font-420">{store.name}</p>
          <div className="tw-flex tw-flex-col">
            <p>City: {store.city}</p>
            <p>Zip: {store.zip}</p>
            <p>Address: {store.address}</p>
          </div>
          <Button
            className="tw-uppercase notification hover:!tw-bg-white hover:!tw-text-primary hover:!shadow-none"
            variant="contained"
            onClick={() => handlePickStore(store)}
          >
            pick up here
          </Button>
        </div>
      </div>
      <div className="text-small tw-flex tw-justify-between tw-items-center tw-px-6 tw-py-[9px] tw-bg-lightGrey">
        <div className="tw-flex tw-items-center">
          <ClockIcon />
          <p className="tw-ml-1">Work time today</p>
        </div>
        <p>{store.workingTime}</p>
      </div>
    </div>
  );
};

export default StoreInfor;
