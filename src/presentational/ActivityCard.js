import React from 'react'
import {Card, Icon} from 'semantic-ui-react'



const ActivityCard = props => {
    return (
        <Card
            image={props.image}
            header={props.header}
            meta={props.type}
            extra={props.icon}
        />
    )
}

ActivityCard.defaultProps = {
    header: "Placeholder",
    image: "https://66.media.tumblr.com/cdace9d2fb94029e0c028fd6ed6fe635/tumblr_nkfx7qq6ct1serey3o1_1280.gifv",
    icon: <Icon name="marker" />,
    type: "misc"
}

export default ActivityCard