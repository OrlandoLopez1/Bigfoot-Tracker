import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
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

    const Ohio = {lat:40.4173,lng:-82.9071};
    const Maine = {lat:45.2538,lng:-69.4455};
    const Washington = {lat:47.7511,lng:-120.7401};
    const Florida = {lat:27.6648,lng:-81.5158};
    const Texas = {lat:31.9686,lng:-99.9018};

    if (!isLoaded) return (<div>Loading...</div>);
    else return(
        <GoogleMap
            zoom={3.6}
            mapContainerStyle={containerStyle}
            center={center}
        >
            <MarkerF position={Ohio} />
            <MarkerF position={Maine} />
            <MarkerF position={Washington} />
            <MarkerF position={Florida} />
            <MarkerF position={Texas} />
        </GoogleMap>
    );
}