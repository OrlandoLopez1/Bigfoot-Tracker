import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import * as React from 'react';

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
        </GoogleMap>
    ) : <></>
}