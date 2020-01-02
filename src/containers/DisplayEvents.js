import React from 'react';
import EventCard from '../presentational/EventCard';
import {Grid} from 'semantic-ui-react'

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
        <Grid>
            <Grid.Column >
                <div className='user-show'>
                    {renderEvents(props)}
                </div>
            </Grid.Column>
        </Grid>
    )

}

export default DisplayEvents