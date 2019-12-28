import React from 'react'
import {Map, GoogleApiWrapper} from 'google-map-react';
import SearchForm from '../presentational/SearchForm'
import {Container, Divider} from 'semantic-ui-react'

const GoogleMapsContainer = props => {
    return (
        <Container className="search-activities">
            <h3>I'll display the google maps tool</h3>
            <SearchForm />
            <Divider />
            <MapContainer />
        </Container>
    )
}

export default GoogleMapsContainer