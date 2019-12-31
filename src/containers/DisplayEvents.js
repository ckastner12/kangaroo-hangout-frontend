import React from 'react';
import {Card} from 'semantic-ui-react'

const DisplayEvents = props => {

    const renderEvents = () => {
        return props.events ? props.events.map(event => {
            return <Card />
        })
    }

    return (
        <div>
            {renderEvents()}
        </div>
    )

}