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
  stores: Store[];
}

const GoogleMapStore: FC<GoogleMapStoreProps> = ({ pickedStore, stores }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState<Store>();

  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    stores?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  const handleMarkerClick = (
    id: string,
    lat: number,
    lng: number,
    address: string
  ) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData(pickedStore);
    setIsOpen(true);
  };

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
          {/* <Marker position={{ lat: 1.436488, lng: 103.785978 }} /> */}

          {stores.map(({ address, lat, lng }, ind) => (
            <Marker
              key={ind}
              position={{ lat, lng }}
              onClick={() => {
                handleMarkerClick(ind, lat, lng, address);
              }}
            >
              {isOpen && inforWindowData && infoWindowData.id == ind && (
                <InfoWindow
                  onCloseClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <h3>{infoWindowData.name}</h3>
                  <p>{infoWindowData.address}</p>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default GoogleMapStore;
