import {} from 'react';
import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from '@react-google-maps/api';
import { useMemo, useState, FC } from 'react';
import { StoreInfor as Store } from '../StoreLocation';

interface GoogleMapStoreProps {
  pickedStore: Store;
  stores: Store[];
}

const GoogleMapStore: FC<GoogleMapStoreProps> = ({ pickedStore, stores }) => {
  const position = { lat: pickedStore.lat, lng: pickedStore.lng };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const [mapRef, setMapRef] = useState();

  const onMapLoad = (map: any) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    stores?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  return (
    <div className="tw-w-[600px] tw-h-[600px]">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="tw-w-full tw-h-full"
          center={position}
          zoom={0}
          onLoad={onMapLoad}
        >
          <Marker position={position}>
            <InfoWindow>
              <div className="tw-flex tw-flex-col tw-gap-1">
                <h3 className="tw-bold">{pickedStore.name}</h3>
                <p>{`${pickedStore.address}, ${pickedStore.city}`}</p>
                <p>{`Working time: ${pickedStore.workingTime}`}</p>
              </div>
            </InfoWindow>
          </Marker>
        </GoogleMap>
      )}
    </div>
  );
};

export default GoogleMapStore;
