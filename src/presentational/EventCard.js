import React from 'react'
import {Card, Feed} from 'semantic-ui-react'

const EventCard = props => {
    
    const renderActivities = () => {
        props.event.activities.map(activity => {
            console.log(activity)
            return (
                <Feed.Event>
                    <Feed.Label image={activity.icon ? activity.icon : ''} />
                    <Feed.Date content={activity.formatted_address} />
                    <Feed.Content>
                        <Feed.Summary>
                            {activity.name}
                        </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>
            )
        })
    }
    return (
        <Card>
            {renderActivities()}
        </Card>
        // <Card>
        //     <Card.Content>
        //         <Card.Header>{props.event}</Card.Header>
        //     </Card.Content>
        //     <Card.Content>
        //         <Feed>
        //             {renderActivities()}
        //         </Feed>
        //         </Card.Content>
        //     </Card>
    )
}

EventCard.defaultProps = {
    event: {
        date: new Date(),
        activities: [{
            image: "",
            name: "Cannot be found"
        }],
        attendees: ""
    }
}

export default EventCard