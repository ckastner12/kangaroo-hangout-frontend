import React from 'react';
import EventCard from '../presentational/EventCard';

const DisplayEvents = props => {

    const renderEvents = () => {
        return props.events ? props.events.map(event => {
            return <EventCard event={event}/>
        }) : [];
    }

    return (
        <>
            {renderEvents()}
        </>
    )

}

export default DisplayEvents