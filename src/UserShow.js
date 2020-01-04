import React from 'react';
import DisplayEvent from "./containers/DisplayEvents"
import { Header, Modal, Button } from "semantic-ui-react"
import Welcome from './presentational/Welcome'
import EditUserModal from './components/EditUserModal';

export default class UserShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
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
        this.fetchUserInfo()
    }

    componentDidUpdate() {
        this.fetchUserInfo()
    }

    fetchUserInfo = () => {
        fetch(`http://localhost:3001/users/${localStorage["id"]}`, {
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

    toggleEditModal = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleEditUser = (edited) => {
        console.log(edited)
    }

    handleDeleteUser = () => {
        console.log("here")
    }

    handleDeleteEvent = (eventId) => {
        fetch(`http://localhost:3001/events/${eventId}`, {
            method: "DELETE",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                this.setState({state: this.state})
            })
    }

    render() {
        return (
            <>
                <Welcome name={this.state.user.name} />
                
                <div>
                    <Header>Upcoming Events</Header>
                    <DisplayEvent events={this.state.upcomingEvents} handleDeleteEvent={this.handleDeleteEvent}/>
                </div>
                <div>
                    <Header>Your Past events</Header>
                    <DisplayEvent events={this.state.pastEvents} handleDeleteEvent={this.handleDeleteEvent}/>
                </div>

                <br/>
                <Button onClick={this.toggleEditModal} >Edit Your Info</Button>
                <Modal open={this.state.edit} handletoggle={this.toggleEditModal}>
                    <Modal.Header>Edit Your Info</Modal.Header>
                    <Modal.Content>
                        <EditUserModal user={this.state.user}/>
                    </Modal.Content>
                </Modal>
            </>
        )
    }
}