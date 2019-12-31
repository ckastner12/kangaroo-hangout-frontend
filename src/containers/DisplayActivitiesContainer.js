import React from "react";
import GoogleMapsContainer from "./GoogleMapsContainer";
import SearchActivitiesContainer from "./SearchActivitiesContainer";
import MyActivitiesChain from "./MyActivitiesChain";
import LoginModal from "../components/LoginModal"
import { Divider, Button} from "semantic-ui-react";

export default class DisplayActivitiesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedin: !!localStorage["email"],
            modal: false,
            results: [],
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
        if (this.state.loggedin === false) {
            this.setState({
                modal: true
            })
        } else {
            //fetch to the backend
        }
    }

    postEvent = () => {
        fetch("http://localhost:3001/users",{
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: localStorage["email"],
                activities: this.state.myActivities
            })
        })
    }

    handleOnLogin = (login) => {
        console.log(login)
        fetch("http://localhost:3001/users/login", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        })
            .then(resp => resp.json())
            .then(json => {})
    }

    handleOnSignup = (signup) => {
        console.log(signup)
        fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signup)
        })
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                // localStorage.setItem('email', )
                // this.setState({
                //     loggedin: true,
                //     modal: false
                // })
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
                <LoginModal 
                    modal={this.state.modal} 
                    handleOnLogin={this.handleOnLogin} 
                    handleOnSignup={this.handleOnSignup} />
                <MyActivitiesChain 
                    myActivities={this.state.myActivities}
                    handleRemove={this.handleRemove}
                    />
                <Divider horizontal><Button onClick={this.handleOnSave}>Save Event</Button></Divider>
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