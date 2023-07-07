import { FC, useState, ChangeEvent } from 'react';
import { Button, Container, GlobalStyles } from '@mui/material';
import { CloseIcon } from '@/app/assets/images/svg/icons';
import clsx from 'clsx';
import styles from './styles.module.css';
import SearchInput from '../SearchInput';
import OutlinedSelect from '../OutlinedSelect';
import ProductOptions from '../ProductOptions';
import StoreFilterAccordion from '../StoreFilterAccordion';
import { stores } from '../../app/api/mockData';
import GoogleMapStore from '../GoogleMapStore';
export interface StoreInfor {
  id: string;
  name: string;
  address: string;
  zip: string;
  city: string;
  workingTime: string;
  imageUrl: string;
  lat: number;
  lng: number;
}
interface StoreLocationProps {
  handleClose?: () => void;
}

const StoreLocation: FC<StoreLocationProps> = ({ handleClose }) => {
  const [searchValue, setSearchvalue] = useState<string>('');
  const [pickedStore, setPickedStore] = useState<StoreInfor>(stores[0]);
  const options = ['10km', '20km', '30km'];
  const handleSearchStore = (stores: StoreInfor[]) => {
    return stores.filter(
      (store) =>
        store.address.toLowerCase().includes(searchValue.toLowerCase()) ||
        store.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const storeAfterSearch = handleSearchStore(stores);
  const addresses: string[] = storeAfterSearch.map((store) => store.address);
  const addressOption = addresses.unshift('Everywhere');
  const handlePickStore = (store: StoreInfor) => setPickedStore(store);

  const handleSearch = (value: string) => {
    setSearchvalue(value);
  };

  return (
    <Container
      maxWidth="lg"
      className={clsx(
        'tw-bg-white tw-w-[70vw] tw-h-[90vh] tw-rounded-md tw-p-6 !tw-pr-0 tw-box-border tw-relative !tw-flex tw-gap-8',
        styles.container
      )}
    >
      <CloseIcon
        onClick={handleClose}
        className="tw-absolute tw-top-[26px] tw-right-6 tw-cursor-pointer"
        fontSize={14}
      />
      <div className="tw-w-[40%] tw-flex tw-flex-col tw-gap-4">
        <h2 className="heading3">Store Location</h2>
        <SearchInput handleSearch={handleSearch} />
        <div className="tw-flex tw-items-center tw-flex-col">
          <p className="body2">Search Radius</p>
          <OutlinedSelect options={options} />
        </div>
        <ProductOptions
          options={addresses}
          className="tw-mt-0 !md:tw-mt-0 tw-w-full"
        />
        <GlobalStyles
          styles={{
            '.MuiButton-root': {
              border: '2px solid var(--colorPrimary)!important',
            },
          }}
        />
        <Button
          variant="outlined"
          className="tw-uppercase tw-w-fit !tw-ml-auto !tw-mr-auto !tw-px-6 !tw-py-[13px] notification hover:tw-text-white hover:!tw-bg-primary"
        >
          locate nearby
        </Button>
        <StoreFilterAccordion
          storeInfor={storeAfterSearch}
          handlePickStore={handlePickStore}
        />
      </div>
      <GoogleMapStore pickedStore={pickedStore} stores={stores} />
    </Container>
  );
};

export default StoreLocation;
