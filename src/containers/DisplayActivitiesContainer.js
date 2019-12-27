import React from "react";
import ActivityCard from "../presentational/ActivityCard";
import GoogleMaps from "./GoogleMaps";

export default class DisplayActivitiesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                I'm meant to take in the google places api call and render activities based on filtering parameters
                <GoogleMaps />
                
            </div>
        )
    }
}