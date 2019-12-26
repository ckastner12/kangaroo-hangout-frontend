import React from "react";
import ActivityCard from "../presentational/ActivityCard";
import GoogleMaps from "../presentational/GoogleMaps";

export default class DisplayActivitiesContainer extends React.Component {

    render() {
        return (
            <div>
                I'm meant to take in the google places api call and render activities based on filtering parameters
                <GoogleMaps />
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
            </div>
        )
    }
}