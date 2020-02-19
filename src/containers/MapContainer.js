import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"

const Map = props => {
    const { lat, lng } = props.defaultGeocode
    const renderMarkers = () => (
        props.markers.map(place => {
            const { lat, lng } = place.geometry.location
            return (<Marker key={place.id} position={{lat: lat, lng: lng}} />)
            })
    )

    return (
        <GoogleMap defaultZoom={10} center={{lat: lat, lng: lng}} >
            {renderMarkers()}
        </GoogleMap>
    );
}

export default withScriptjs(withGoogleMap(Map))