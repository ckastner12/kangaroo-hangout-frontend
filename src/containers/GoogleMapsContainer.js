import React from 'react'
import MapContainer from './MapContainer'
import SearchForm from '../presentational/SearchForm'
import {Container, Divider} from 'semantic-ui-react'

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
            {/* <MapContainer /> */}
        </div>
    )
}

export default GoogleMapsContainer