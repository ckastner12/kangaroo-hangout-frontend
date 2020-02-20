import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps"

const Map = props => {
    const { lat, lng } = props.defaultGeocode
    const renderMarkers = () => (
        props.markers.map(place => {
            console.log(place)
            const { lat, lng } = place.geometry.location
            return (<Marker key={place.id} position={{lat: lat, lng: lng}} onClick={() => props.handleAdd(place)}/>)
            })
    )


    return (
        <GoogleMap defaultZoom={10} center={{lat: lat, lng: lng}} >
            {renderMarkers()}
            {selected && (
                <InfoWindow 
                    position={{lat: selected.geometry.location.lat, lng: selected.geometry.location.lng}}
                    onCloseClick={() => props.handleAdd(null)}
                    >
                    <div>
                        <h2>{selected.name}</h2>
                        <p>{selected.formatted_address}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

export default withScriptjs(withGoogleMap(Map))