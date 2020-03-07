import React from 'react'
import MapContainer from './MapContainer'
import Loader from "../components/Loader"

const GoogleMapsContainer = props => {
    return (
            <div className="maps-container" >
                <MapContainer 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
                    loadingElement={<div style={{height: '100%'}} ><Loader /></div>}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    defaultGeocode={props.defaultGeocode}
                    handleSelectPlace={props.handleSelectPlace}
                    selected={props.selected}
                    markers={props.markers}
                    />
            </div>
    )
}

export default GoogleMapsContainer