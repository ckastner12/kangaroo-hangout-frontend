import React from 'react'
import MapContainer from './MapContainer'
import SearchForm from '../presentational/SearchForm'
import Loader from "../components/Loader"
import { Divider } from 'semantic-ui-react'

const GoogleMapsContainer = props => {
    return (
        <div className="search-activities search-bar">
            <h3>I'll Search Through Google Maps</h3>
            <SearchForm 
                handleOnChange={props.handleOnChange} 
                handleOnSelect={props.handleOnSelect} 
                handleOnSearch={props.handleOnSearch}
                />
            <Divider />
            <div style={{width: '400px', height: '400px'}} >
                <MapContainer 
                    googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
                    loadingElement={<div style={{height: '100%'}} ><Loader /></div>}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    />
            </div>
        </div>
    )
}

export default GoogleMapsContainer