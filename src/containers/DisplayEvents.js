import React from 'react';
import EventCard from '../presentational/EventCard';

const DisplayEvents = props => {

    const renderEvents = (props) => {
        return props.events.length > 0 ? props.events.map(event => {
            return <EventCard 
                event={event} 
                key={event.id} 
                handleDeleteEvent={props.handleDeleteEvent} />
        }) : [];
    }

    return (
        <div className='user-show'>
            {renderEvents(props)}
        </div>
    )

}

export default DisplayEvents