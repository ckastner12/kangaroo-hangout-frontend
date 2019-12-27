import React from "react";
import ActivityCard from "../presentational/ActivityCard";
import GoogleMaps from "./GoogleMapsContainer";
import SearchActivitiesContainer from "./SearchActivitiesContainer";
import MyActivitiesChain from "./MyActivitiesChain";

export default class DisplayActivitiesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: {
                query: "",
                location: "",
                query: "",
                type: ""
            }
        }
    }

    render() {
        return (
            <>
                <MyActivitiesChain />
                <div className="activities-display">
                    <SearchActivitiesContainer />
                    <GoogleMaps />
                </div>
            </>
        )
    }
}