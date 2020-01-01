import React from "react";
import GoogleMapsContainer from "./GoogleMapsContainer";
import SearchActivitiesContainer from "./SearchActivitiesContainer";
import MyActivitiesChain from "./MyActivitiesChain";
import DateForm from "../components/DateForm";
import { Divider, Button, Icon } from "semantic-ui-react";

export default class DisplayActivitiesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            myActivities: [
                {name: "Joe's Crab Shack",
                formatted_address: "123 Jones Strees"}, 
                {name: "In n out",
                formatted_address: "124 Jones Strees"},
            ],
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

    handleChangeDate = (date) => {
        console.log(typeof date)
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
                    user_id: localStorage["id"],
                    activities_attributes: this.state.myActivities
                }
            }) 
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
                <MyActivitiesChain 
                    myActivities={this.state.myActivities}
                    handleRemove={this.handleRemove}
                    />
                <Divider horizontal>
                        <Button onClick={this.handleOnSave}>
                        <Icon name="calendar plus outline" />Save Event</Button>
                        <DateForm handleChangeDate={this.handleChangeDate} />
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