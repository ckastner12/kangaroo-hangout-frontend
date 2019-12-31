import React from 'react'
import {Card, Icon, Button} from 'semantic-ui-react'

const ActivityCard = props => {
    const {image, name, types, icon, formatted_address} = props.activity
    const formatTypes = types.reduce((total, type) => total + " " + type)
    const extra = () => {
        
        return(
            <>
                {props.handleAdd ? <Button primary onClick={() => props.handleAdd(props.activity)}>Add</Button> 
                : <Button color="red" onClick={() => props.handleRemove(props.activity)}>Remove</Button>}
                <Button secondary>Inspect</Button>
            </>
        )
    }

    return (
        <Card
            // image={props.image}
            header={name}
            meta={`Types: ${formatTypes}`}
            description={<span><img className="icon" src={icon}/>  {formatted_address}</span>}
            extra={extra()}
        />
    )
}

ActivityCard.defaultProps = {
    name: "Placeholder",
    image: "https://66.media.tumblr.com/cdace9d2fb94029e0c028fd6ed6fe635/tumblr_nkfx7qq6ct1serey3o1_1280.gifv",
    icon: <Icon name="marker" />,
    type: "misc"
}

export default ActivityCard