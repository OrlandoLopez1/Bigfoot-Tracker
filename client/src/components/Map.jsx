import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import * as React from 'react';
import { useMemo } from 'react';

const containerStyle = {
    width: '540px',
    height: '400px',
};

const center = {
    lat: 39.8283,
    lng: -98.5795
};

export default function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyC9vwgqv8LdmoZTw4coPyaqd6MRdDLJkJo',
    });

    const Ohio = useMemo(() => ({lat:40.4173,lng:82.9071}), []);
    const Maine = useMemo(() => ({lat:45.2538,lng:69.4455}), []);
    const Washington = useMemo(() => ({lat:47.7511,lng:120.7401}), []);
    const Florida = useMemo(() => ({lat:27.6648,lng:81.5158}), []);
    const Texas = useMemo(() => ({lat:31.9686,lng:99.9018}), []);

    // const [map, setMap] = React.useState(null);

    // const onLoad = React.useCallback(function callback(map) {
    //     const bounds = new window.google.maps.LatLngBounds(center);
    //     map.fitBounds(bounds);

    //     setMap(map);
    // }, []);

    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null);
    // }, []);

    return isLoaded ? (
        <GoogleMap
        zoom={3.6}
        mapContainerStyle={containerStyle}
        center={center}
        //onLoad={onLoad}
        //onUnmount={onUnmount}
        >
            <Marker position={Ohio} />
            <Marker position={Maine} />
            <Marker position={Washington} />
            <Marker position={Florida} />
            <Marker position={Texas} />
        </GoogleMap>
    ) : <></>
}