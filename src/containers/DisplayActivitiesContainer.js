import React from "react";
import GoogleMapsContainer from "./GoogleMapsContainer";
import SearchActivitiesContainer from "./SearchActivitiesContainer";
import MyActivitiesChain from "./MyActivitiesChain";
import DateForm from "../components/DateForm";
import { Redirect } from 'react-router-dom';
import { Divider, Button, Icon, Modal } from "semantic-ui-react";
import AddressModal from '../components/AddressModal'

export default class DisplayActivitiesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            searchModal: true,
            date: new Date(),
            myActivities: [],
            search: {
                query: "",
                location: "",
                radius: 3200,
                type: ""
            }
        }
    }

    handleOnChange = (event) => {
        const {id, value} = event.target
        this.handleOnSelect(id, value)
    }

    handleSetAddress = () => {
        this.setState({
            searchModal: !this.state.searchModal
        })
    }

    handleChangeDate = (date) => {
        this.setState({
            date: date
        })
    }

    handleOnSelect = (id, value) => {
        this.setState(prevState => {
            return {
                search: {
                    ...prevState.search,
                    [id]: value
                }
            } 
        })
    }

    handleOnSearch = () => {
        fetch("http://localhost:3001/google_api", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.search)
        })
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                results: json.results
            })
        })
    }

    inMyActivities = (activity) => {
        for (let i = 0; i < this.state.myActivities.length; i++) {
            if (this.state.myActivities[i].id === activity.id) {
                return true
            }
        }
        return false
    }

    handleOnSave = () => {
        if (!localStorage["id"]) {
            this.props.handleLogin()
        } else {
            this.postEvent() 
            this.setState({
                myActivities: []
            })
            return <Redirect to="/user" /> 
        }
    }

    postEvent = () => {
        fetch("http://localhost:3001/events",{
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                event: {
                    date: this.state.date,
                    user_id: localStorage["id"],
                    activities_attributes: this.state.myActivities
                }
            }) 
        })
            .then(resp => resp.json())
            .then(json => {
                return true
            })
    }
    
    handleAdd = (activity) => {
        if (this.inMyActivities(activity) === false) {
            this.setState(prevState => {
                return {myActivities: [...prevState.myActivities, activity]}
            })
        }
    }

    handleRemove = (object) => {
        this.setState(prevState => {
            return {
                myActivities: prevState.myActivities.filter(activity => activity.id !== object.id)
            }
        })
    }

    render() {
        return (
            <>
                <Modal open={this.state.searchModal}>
                    <Modal.Header>Give An Address Before You Search</Modal.Header>
                    <Modal.Content>
                        <AddressModal 
                            handleOnChange={this.handleOnChange} 
                            handleSetAddress={this.handleSetAddress} />
                    </Modal.Content>
                </Modal>
                <MyActivitiesChain 
                    myActivities={this.state.myActivities}
                    handleRemove={this.handleRemove}
                    />
                <Divider horizontal>
                        <Button onClick={this.handleOnSave}>
                        <Icon name="calendar plus outline" />Save Event</Button>
                        <DateForm handleChangeDate={this.handleChangeDate} date={this.state.date} />
                        <span><b>Address:</b> {this.state.search.location}</span>
                </Divider>
                <div className="activities-display">
                    <SearchActivitiesContainer
                        handleAdd={this.handleAdd}
                        activities={this.state.results} />
                    <GoogleMapsContainer 
                        handleOnChange={this.handleOnChange} 
                        handleOnSelect={this.handleOnSelect} 
                        handleOnSearch={this.handleOnSearch}
                        />
                </div>
            </>
        )
    }
}