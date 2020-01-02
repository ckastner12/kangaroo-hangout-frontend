import React from 'react';
import DisplayEvent from "./containers/DisplayEvents"
import {Header} from "semantic-ui-react"
import Welcome from './presentational/Welcome'

export default class UserShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            upcomingEvents: [],
            pastEvents: [],
            requestEvents: [],
            user : {
                name: "",
                email: ""
            }
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3001/users/${this.props.userId}`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(json => {
                
            })
    }

    readJson = (json) => {

    }

    render() {
        return (
            <div className="user-show">
                <Welcome name={this.state.user.name} />
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