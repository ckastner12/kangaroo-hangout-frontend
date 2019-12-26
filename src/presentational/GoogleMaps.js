import React from 'react'
import {GoogleMap as Map} from 'google-map-react';

const GoogleMaps = props => {
    return (
        <div>
            <h3>I'll display the google maps tool</h3>
            <Map bootstrapURLKeys={{
                key: "AIzaSyBCHWjw3rHXuSkQDOz2wF7u6nbx9BI3zqk",
                language: 'en',
                region: 'en'}}
                />
        </div>
    )
}

export default GoogleMaps