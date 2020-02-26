import React from 'react'
import {Card, Feed, Button} from 'semantic-ui-react'

const EventCard = props => {
    const renderDate = (date) => {
        return `${date.getMonth() + 1}/${date.getDate() + 1}/${date.getFullYear()}`
    }
    
    const renderActivities = () => {
        return props.event.activities.map(activity => {
            return (
                <Feed.Event key={activity.id}>
                    <Feed.Label image={activity.icon ? activity.icon : 'https://www.pinclipart.com/picdir/big/397-3973323_kangaroo-silhouette-free-png-image-kangaroo-stencil-png.png'} />
                    <Feed.Content>
                        <Feed.Summary>
                            {activity.name}
                        </Feed.Summary>
                        <Feed.Meta content={activity.formatted_address} />
                    </Feed.Content>
                </Feed.Event>
            )
        })
    }

    return (
        <div className="event" data-testid="event-card">
            <Card key={props.event.id}>
                <Card.Content>
                    <Card.Header>{renderDate(props.event.date)}</Card.Header>
                </Card.Content>
                <Card.Content >
                    <Feed>
                    {renderActivities()}
                    </Feed>
                </Card.Content>
                <Card.Content extra>
                    <Button color="red" onClick={() => props.handleDeleteEvent(props.event.id)}>Delete</Button>
                    {/* <Button secondary>Inspect</Button> */}
                </Card.Content>
            </Card>
        </div>
    )
}

EventCard.defaultProps = {
    event: {
        date: new Date(),
        activities: [{
            image: "",
            name: "Cannot be found",
            id: 1
        }],
        attendees: ""
    }
}

export default EventCard