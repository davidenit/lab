import { FC } from 'react';
import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import { StoreInfor as Store } from '../StoreLocation';

interface GoogleMapStoreProps {
  pickedStore: Store;
}

const GoogleMapStore: FC<GoogleMapStoreProps> = ({ pickedStore }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();

  const center = useMemo(() => ({ lat: 1.436488, lng: 103.785978 }), []);

  return (
    <div className="tw-w-[600px] tw-h-[600px]">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="tw-w-full tw-h-full"
          center={center}
          zoom={15}
        >
          <Marker position={{ lat: 1.436488, lng: 103.785978 }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default GoogleMapStore;
