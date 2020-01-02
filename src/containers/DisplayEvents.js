import React from 'react';
import EventCard from '../presentational/EventCard';

const DisplayEvents = props => {

    const renderEvents = (props) => {
        return props.events.length > 0 ? props.events.map(event => {
            return <EventCard event={event} />
        }) : [];
    }

    return (
        <>
            {renderEvents(props)}
        </>
    )

}

export default DisplayEvents