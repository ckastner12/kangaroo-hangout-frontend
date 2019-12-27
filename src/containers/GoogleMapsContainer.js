import React from 'react'
import GoogleMap from 'google-map-react';
import SearchForm from '../presentational/SearchForm'
import {Container, Divider} from 'semantic-ui-react'

const GoogleMapsContainer = props => {
    return (
        <Container className="search-activities">
            <h3>I'll display the google maps tool</h3>
            <SearchForm />
            <Divider />
            <GoogleMap bootstrapURLKeys={{
                key: "AIzaSyBCHWjw3rHXuSkQDOz2wF7u6nbx9BI3zqk",
                language: 'en',
                region: 'en'}}
                />
        </Container>
    )
}

export default GoogleMapsContainer