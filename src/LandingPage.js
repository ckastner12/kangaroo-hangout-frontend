import React from 'react'
import LandingContainer from './containers/LandingContainer'
import ExploreContainer from './containers/ExploreContainer'



export default class LandingPage extends React.Component {

    render() {
        return (
            <>
                <LandingContainer />
                <ExploreContainer />
            </>
        )
    }
}