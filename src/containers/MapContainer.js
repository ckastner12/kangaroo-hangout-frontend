import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps"

const Map = props => {
    const { lat, lng } = props.defaultGeocode
    const renderMarkers = () => (
        props.markers.map(place => {
            console.log(place)
            const { lat, lng } = place.geometry.location
            return (<Marker key={place.id} position={{lat: lat, lng: lng}} onClick={() => props.handleSelectPlace(place)}/>)
            })
    )


    return (
        <GoogleMap defaultZoom={10} center={{lat: lat, lng: lng}} >
            {renderMarkers()}
            {props.selected && (
                <InfoWindow 
                    position={{lat: props.selected.geometry.location.lat, lng: props.selected.geometry.location.lng}}
                    onCloseClick={() => props.handleSelectPlace(null)}
                    >
                    <div>
                        <h2>{props.selected.name}</h2>
                        <p>{props.selected.formatted_address}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

export default withScriptjs(withGoogleMap(Map))