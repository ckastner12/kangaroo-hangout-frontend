import React from 'react'
import GoogleMap from 'google-map-react';
import SearchForm from '../presentational/SearchForm'

const GoogleMaps = props => {
    return (
        <div>
            <h3>I'll display the google maps tool</h3>
            <SearchForm />
            <GoogleMap bootstrapURLKeys={{
                key: "AIzaSyBCHWjw3rHXuSkQDOz2wF7u6nbx9BI3zqk",
                language: 'en',
                region: 'en'}}
                />
        </div>
    )
}

export default GoogleMaps