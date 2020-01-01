import React from 'react';
import DisplayEvent from "./containers/DisplayEvents"
import {Header} from "semantic-ui-react"

export default class UserShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            upcomingEvents: [],
            pastEvents: [],
            requestEvents: []
        }
    }

    render() {
        return (
            <div className="user-show">
                <div className="user upcoming">
                    <Header>Upcoming Events</Header>
                    <DisplayEvent events={this.state.upcomingEvents}/>
                </div>
                <div className="user past">
                    <Header>Your Past events</Header>
                    <DisplayEvent events={this.state.pastEvents} />
                </div>
                <div className="user request">
                    <Header>Your Event Invitations</Header>
                    <DisplayEvent events={this.state.requestEvents}/>
                </div>
            </div>
        )
    }
}