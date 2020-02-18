import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"

const Map = props => {
    const { lat, lng } = props.defaultGeocode
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{lat: lat, lng: lng}}>
            {}
        </GoogleMap>
    );
}

export default withScriptjs(withGoogleMap(Map))