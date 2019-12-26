import React from 'react'
import {Card, Icon} from 'semantic-ui-react'

const ActivityCard = props => {
    return (
        <Card 
            header={props.header}
            image={props.image}
            description="I'm meant to display a single activity that google places feeds back or that a user creates for themselves." 
            meta={props.type}
        />
    )
}

ActivityCard.defaultProps = {
    header: "Placeholder",
    image: "https://66.media.tumblr.com/cdace9d2fb94029e0c028fd6ed6fe635/tumblr_nkfx7qq6ct1serey3o1_1280.gifv",
    icon: "marker",
    type: "misc"
}

export default ActivityCard