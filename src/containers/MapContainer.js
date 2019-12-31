import React from 'react';
import {Map, GoogleApiWrapper} from 'google-map-react';

const MapContainer = props => {
    const mapStyles = {
        width: '50px',
        height: '50px',
      };

    return (
        <Map
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
}

export default MapContainer