import React from 'react';
import DisplayActivitiesContainer from './containers/DisplayActivitiesContainer'

export default class CreateEvent extends React.Component {

    render() {
        return (
            <DisplayActivitiesContainer 
                openModal={this.props.openModal}
                eventId={this.props.eventId}
                />
        )
    }
} 

CreateEvent.defaultProps = {
    event: ''
}