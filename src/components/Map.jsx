import { GoogleMap, MarkerF, useJsApiLoader, MarkerLabel } from '@react-google-maps/api';
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

    const Michigan = {lat:44.3148,lng:-85.6024};
    const Virginia = {lat:37.4316,lng:-78.6569};
    const Illinois = {lat:40.6331 ,lng:-89.3985};
    const Florida = {lat:27.6648,lng:-81.5158};
    const Texas = {lat:31.9686,lng:-99.9018};
    const New_York = {lat:43.2994 ,lng:-74.2179};

    if (!isLoaded) return (<div>Loading...</div>);
    else return(
        <GoogleMap
            zoom={3.6}
            mapContainerStyle={containerStyle}
            center={center}
        >
            <MarkerF position={Michigan} label='1' text="yo" />
            <MarkerF position={Texas} label='2'/>
            <MarkerF position={Virginia} label='3' />
            <MarkerF position={Florida} label='4'/>
            <MarkerF position={Illinois} label='5'/>
            <MarkerF position={New_York} label='6'/>
        </GoogleMap>
    );
}