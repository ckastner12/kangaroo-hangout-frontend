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
            header={name}
            meta={`Types: ${formatTypes}`}
            description={<span><img className="icon" src={icon}/>  {formatted_address}</span>}
            extra={extra()}
        />
    )
}

ActivityCard.defaultProps = {
    // activity: {
    //     name: "Cannot Find Name",
    //     icon: <Icon name="marker" />,
    //     types: "misc",
    //     formatted_address: "No Result Found"
    // }
}

export default ActivityCard