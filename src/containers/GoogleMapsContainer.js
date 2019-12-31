import React from 'react'
import {Map, GoogleApiWrapper} from 'google-map-react';
import SearchForm from '../presentational/SearchForm'
import {Container, Divider} from 'semantic-ui-react'

const GoogleMapsContainer = props => {
    return (
        <div className="search-activities">
            <h3>I'll display the google maps tool</h3>
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