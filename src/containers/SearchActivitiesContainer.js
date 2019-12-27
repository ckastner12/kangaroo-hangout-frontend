import React from 'react';
import ActivityCard from '../presentational/ActivityCard';


export default class SearchActivitiesContainer extends React.Component {

    render() {
        return (
            <div className="search-activities results">
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
            </div>
            )
    }
}