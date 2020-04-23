import React from "react";
import GoogleMapsContainer from "./GoogleMapsContainer";
import SearchActivitiesContainer from "./SearchActivitiesContainer";
import SearchForm from '../presentational/SearchForm'
import MyActivitiesChain from "./MyActivitiesChain";
import DateForm from "../components/DateForm";
import { Divider, Button, Icon, Modal } from "semantic-ui-react";
import "./styles/DisplayActivitiesContainer.css"
import AddressModal from '../components/AddressModal'
import { api } from "../services/api";

export default class DisplayActivitiesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            results: [],
            searchModal: true,
            date: new Date(),
            myActivities: [],
            selected: null,
            search: {
                query: "",
                location: "",
                geocode: {
                    lat: 0,
                    lng: 0,
                },
                radius: 32000,
                type: ""
            },
            error: ''
        }
    }

    handleOnChange = (event) => {
        const {id, value} = event.target
        this.handleOnSelect(id, value)
    }

    handleSelectPlace = (place) => {
        this.setState({
            selected: place
        })
    }

    handleSetAddress = () => {
        fetch("https://evening-peak-84473.herokuapp.com/google_api/geocode", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.search)
        }).then(resp => resp.json())
            .then(json => {
                this.setState({
                    searchModal: !this.state.searchModal,
                    search: { 
                        ...this.state.search,
                        geocode: {
                            lat: json.lat,
                            lng: json.lng
                        }
                    }
                })
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
        this.setState({loading: true}, () => {
            fetch("https://evening-peak-84473.herokuapp.com/google_api", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({google_api: this.state.search})
            })
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                this.setState({
                    results: json.results,
                    loading: false
                })
            })
        })
    }

    toggleSearchModal = () => {
        this.setState({searchModal: !this.state.searchModal})
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
        if (!localStorage["token"]) {
            this.setState({error: "Must Login to Save Event"})
        } else {
            this.postEvent() 
            this.setState({
                myActivities: []
            })
            this.props.handleRoutePage(`/user`)
        }
    }

    postEvent = () => {
        api.event.createEvent({event: {
            date: this.state.date.toDateString(),
            activities_attributes: this.state.myActivities
        }})
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
                <Modal open={this.state.searchModal} onClose={this.toggleSearchModal} closeOnDimmerClick={true}>
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
                    <ul className="divider-list">
                        <li>
                        <p style={{color: "red"}}>{`${this.state.error}`}</p>
                        </li>
                        <li>
                            <Button color="primary" onClick={this.handleOnSave}>
                            <Icon name="calendar plus outline" />Save Event</Button>
                        </li>
                        <li>
                            <DateForm handleChangeDate={this.handleChangeDate} date={this.state.date} />
                        </li>
                        <li>
                            <button onClick={this.toggleSearchModal}><b>Address:</b> {this.state.search.location}</button>
                        </li>
                    </ul>
                </Divider>
                <div className="display" >
                    <div className="activities-display">
                        <div className="search-activities search-bar">
                    <h3>I'll Search Through Google Maps</h3>
                    <SearchForm 
                        handleOnChange={this.handleOnChange} 
                        handleOnSelect={this.handleOnSelect} 
                        handleOnSearch={this.handleOnSearch}
                    />
                    <Divider />
                    <SearchActivitiesContainer
                        handleAdd={this.handleAdd}
                        handleSelectPlace={this.handleSelectPlace}
                        loading={this.state.loading}
                        activities={this.state.results} />
                    </div>
                    <GoogleMapsContainer 
                        handleOnChange={this.handleOnChange} 
                        handleOnSelect={this.handleOnSelect} 
                        handleOnSearch={this.handleOnSearch}
                        defaultGeocode={this.state.search.geocode}
                        handleSelectPlace={this.handleSelectPlace}
                        selected={this.state.selected}
                        markers={this.state.results}
                        />
                </div>
                </div>
            </>
        )
    }
}