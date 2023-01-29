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
    const TX = {lat:31.9686,lng:-99.9018};
    const VA = {lat:37.4316,lng:-78.6569};
    const FL = {lat:27.6648,lng:-81.5158};
    const NY = {lat:43.2994,lng:-74.2179};
    const IL = {lat:40.6331 ,lng:-89.3985};
    const TN = {lat:35.5175 ,lng:-86.5804};
    const GA = {lat:32.1656 ,lng:- 82.9001};
    const WV = {lat:38.5976 ,lng:-80.4549};
    const WI = {lat:43.7844 ,lng:-88.7879};
    const IN = {lat:40.2672 ,lng:-86.1349};
    const LA = {lat:30.9843 ,lng:-91.9623};
    const MS = {lat:37.9643 ,lng:-91.8318};
    const MO = {lat:46.8797 ,lng:-110.3626};
    const OH = {lat:40.4173 ,lng:-82.9071};
    const AL = {lat:32.3182 ,lng:-86.9023};
    const AR = {lat:34.5574 ,lng:-92.2863};
    const CO = {lat:39.5501 ,lng:-105.7821};
    const KT = {lat:37.8393 ,lng:-84.2700};
    const NV = {lat:38.8026 ,lng:-116.4194};
    const NC = {lat:35.7596 ,lng:-79.0193};
    const PN = {lat:41.2033 ,lng:-77.1945};
    const WS = {lat:47.7511 ,lng:-120.7401};
    const AS = {lat:64.2008 ,lng:-149.4937};
    const CA = {lat:36.7783 ,lng:-119.4179};
    const IO = {lat:41.8780 ,lng:-93.0977};
    const KS = {lat:39.0119 ,lng:-98.4842};
    const MY = {lat:39.0458 ,lng:-76.6413};
    const MISS = {lat:32.3547 ,lng:-89.3985};
    const NH = {lat:43.1939 ,lng:-71.5724};
    const ND = {lat:47.5515 ,lng:-101.0020};
    const OK = {lat:35.0078 ,lng:-97.0929};
    const SC = {lat:33.8361 ,lng:-81.1637};
    const VM = {lat:44.5588 ,lng:-72.5778};
    const WY = {lat:39.0458 ,lng:-76.6413};
    const AZ = {lat:34.0489 ,lng:-111.0937};
    const CN = {lat:41.6032 ,lng:-73.0877};
    const DL = {lat:38.9108 ,lng:-75.5277};
    const HI = {lat:19.8968 ,lng:-155.5828};
    const ID = {lat:44.0682 ,lng:-114.7420};
    const MA = {lat:45.2538 ,lng:-69.4455};
    const MASS = {lat:42.4072 ,lng:-71.3824};
    const MINN = {lat:46.7296 ,lng:-94.6859};
    const NB = {lat:41.4925 ,lng:-99.9018};
    const NJ = {lat:40.0583 ,lng:-74.4057};
    const NM = {lat:34.5199 ,lng:-105.8701};
    const OR = {lat:43.8041 ,lng:-120.5542};
    const RI = {lat:41.5801 ,lng:-71.4774};
    const SD = {lat:43.9695 ,lng:-99.9018};
    const UT = {lat:39.3210 ,lng:-111.0937};
    

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
            <MarkerF position={NY} label='6'/>
            <MarkerF position={TN} label='7'/>
            <MarkerF position={GA} label='8'/>
            <MarkerF position={WV} label='9'/>
            <MarkerF position={WI} label='10'/>
            <MarkerF position={IN} label='11'/>
            <MarkerF position={LA} label='12'/>
            <MarkerF position={MS} label='13'/>
            <MarkerF position={MO} label='14'/>
            <MarkerF position={OH} label='15'/>
            <MarkerF position={AL} label='16'/>
            <MarkerF position={AR} label='17'/>
            <MarkerF position={CO} label='18'/>
            <MarkerF position={KT} label='19'/>
            <MarkerF position={NV} label='20' />
            <MarkerF position={NC} label='21'/>
            <MarkerF position={PN} label='22'/>
            <MarkerF position={WS} label='23'/>
            <MarkerF position={AS} label='24'/>
            <MarkerF position={CA} label='25'/>
            <MarkerF position={IO} label='26'/>
            <MarkerF position={KS} label='27'/>
            <MarkerF position={MY} label='28'/>
            <MarkerF position={MISS} label='29'/>
            <MarkerF position={NH} label='30'/>
            <MarkerF position={ND} label='31'/>
            <MarkerF position={OK} label='32'/>
            <MarkerF position={SC} label='33'/>
            <MarkerF position={VM} label='34'/>
            <MarkerF position={WY} label='35'/>
            <MarkerF position={AZ} label='36'/>
            <MarkerF position={CN} label='37'/>
            <MarkerF position={DL} label='38'/>
            <MarkerF position={HI} label='39'/>
            <MarkerF position={ID} label='40'/>
            <MarkerF position={MA} label='41'/>
            <MarkerF position={MASS} label='42'/>
            <MarkerF position={MINN} label='43'/>
            <MarkerF position={NB} label='44'/>
            <MarkerF position={NJ} label='45'/>
            <MarkerF position={NM} label='46'/>
            <MarkerF position={OR} label='47'/>
            <MarkerF position={RI} label='48'/>
            <MarkerF position={SD} label='49'/>
            <MarkerF position={UT} label='50'/>
        </GoogleMap>
    );
}