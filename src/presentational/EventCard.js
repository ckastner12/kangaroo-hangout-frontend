import React from 'react'
import {Card, Feed} from 'semantic-ui-react'

const EventCard = props => {
    const renderActivities = () => {
        props.event.activities.map(activity => {
            return (
                <Feed.Event>
                    <Feed.Label image={activity.icon} />
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
            <Card.Content>
                <Card.Header>{props.event}</Card.Header>
            </Card.Content>
            <Card.Content>
                <Feed>
                    {renderActivities()}
                </Feed>
                </Card.Content>
            </Card>
    )
}

export default EventCard