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
            today: new Date(),
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
            .then(this.readJson)
    }

    readJson = (json) => {
        const {attendees, events, name, email} = json
        this.setState({
            user: {
                name: name,
                email: email
            },
            ...this.segmentEvents([...events, ...attendees]) 
        })
    }

    segmentEvents = (events) => {
        let bifurcated = {
            upcomingEvents: [],
            pastEvents: [],
        }

        for (let i = 0; i < events.length; i++) {
            let eventDate = new Date(events[i].date)
            if (this.state.today < eventDate) {
                bifurcated.upcomingEvents.push({...events[i], date: eventDate })
            } else {
                bifurcated.pastEvents.push({...events[i], date: eventDate })
            }
        }
        return bifurcated
    }

    render() {
        return (
            <div className="user-show">
                <Welcome name={this.state.user.name} />
                <div className="user upcoming">
                    <Header>Upcoming Events</Header>
                    <DisplayEvent />
                </div>
                <div className="user past">
                    <Header>Your Past events</Header>
                    <DisplayEvent />
                </div>
                <div className="user request">
                    <Header>Your Event Invitations</Header>
                    <DisplayEvent />
                </div>
            </div>
        )
    }
}