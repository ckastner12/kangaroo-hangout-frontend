import React from "react";
import GoogleMapsContainer from "./GoogleMapsContainer";
import SearchActivitiesContainer from "./SearchActivitiesContainer";
import MyActivitiesChain from "./MyActivitiesChain";

export default class DisplayActivitiesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: {
                query: "",
                location: "",
                radius: "",
                type: ""
            }
        }
    }

    

    handleOnChange = (event) => {
        const {id, value} = event.target
        this.handleOnSelect(id, value)
    }

    handleOnSelect = (id, value) => {
        console.log(id, value)
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
        fetch()
    }

    render() {
        return (
            <>
                <MyActivitiesChain />
                <div className="activities-display">
                    <SearchActivitiesContainer />
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