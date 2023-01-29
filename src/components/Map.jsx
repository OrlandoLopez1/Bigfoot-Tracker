import { GoogleMap, MarkerF, useJsApiLoader, MarkerLabel } from '@react-google-maps/api';
import { within } from '@testing-library/react';
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

    const MI = {lat:44.3148,lng:-85.6024};
    const VA = {lat:37.4316,lng:-78.6569};
    const IL = {lat:40.6331 ,lng:-89.3985};
    const FL = {lat:27.6648,lng:-81.5158};
    const TX = {lat:31.9686,lng:-99.9018};
    const TN = {lat:35.5175 ,lng:-86.5804};
    const GA = {lat:32.1656 ,lng:- 82.9001};
    const WV = {lat:38.5976 ,lng:-80.4549};
    const WI = {lat:43.7844 ,lng:-88.7879};
    const IN = {lat:40.2672 ,lng:-86.1349};
    const LA = {lat:30.9843 ,lng:-91.9623};
    /*const New_York = {lat:43.2994 ,lng:-74.2179};
    const New_York = {lat:43.2994 ,lng:-74.2179};
    const New_York = {lat:43.2994 ,lng:-74.2179};
    const New_York = {lat:43.2994 ,lng:-74.2179};
    const New_York = {lat:43.2994 ,lng:-74.2179};
    const New_York = {lat:43.2994 ,lng:-74.2179};
    const New_York = {lat:43.2994 ,lng:-74.2179};
    const New_York = {lat:43.2994 ,lng:-74.2179};
    const New_York = {lat:43.2994 ,lng:-74.2179};
    const New_York = {lat:43.2994 ,lng:-74.2179};
    const New_York = {lat:43.2994 ,lng:-74.2179};
    const New_York = {lat:43.2994 ,lng:-74.2179};
    const New_York = {lat:43.2994 ,lng:-74.2179};
    const New_York = {lat:43.2994 ,lng:-74.2179};
    const New_York = {lat:43.2994 ,lng:-74.2179};
    const New_York = {lat:43.2994 ,lng:-74.2179};
    */

    if (!isLoaded) return (<div>Loading...</div>);
    else return(
        <GoogleMap
            zoom={3.6}
            mapContainerStyle={containerStyle}
            center={center}
        >
            <MarkerF position={MI} label='1' text="yo" />
            <MarkerF position={TX} label='2'/>
            <MarkerF position={VA} label='3' />
            <MarkerF position={FL} label='4'/>
            <MarkerF position={IL} label='5'/>
            <MarkerF position={TN} label='6'/>
            <MarkerF position={GA} label='7'/>
            <MarkerF position={WV} label='8'/>
            <MarkerF position={WI} label='9'/>
            <MarkerF position={IN} label='10'/>
            <MarkerF position={LA} label='11'/>
        </GoogleMap>
    );
}