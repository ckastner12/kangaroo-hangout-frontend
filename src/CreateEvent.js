import React from 'react';
import CreateEventContainer from './containers/CreateEventContainer'
import DisplayActivitiesContainer from './containers/DisplayActivitiesContainer'

export default class CreateEvent extends React.Component {

    render() {
        return (
        <>
            <CreateEventContainer />
            <DisplayActivitiesContainer />
        </>
        )
    }
} 