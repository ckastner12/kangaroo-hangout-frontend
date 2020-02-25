import React from 'react';
import DisplayActivitiesContainer from './containers/DisplayActivitiesContainer'

const CreateEvent = props => {
    const routePage = (path) => {
        props.history.push(path)
    }

    return (
        <DisplayActivitiesContainer 
            openModal={props.openModal}
            eventId={props.eventId}
            handleRoutePage={routePage}
            />
    )
} 

CreateEvent.defaultProps = {
    event: ''
}

export default CreateEvent