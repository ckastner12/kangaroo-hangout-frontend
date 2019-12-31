import React from 'react';
import ActivityCard from '../presentational/ActivityCard';


const SearchActivitiesContainer = props => {

    const renderActivities = () => {
        return props.activities ? props.activities.map(activity => {
            return <ActivityCard activity={activity} handleAdd={props.handleAdd} /> 
        }) : <h3 className="no-results">No Results</h3>
    }

    return (
        <div className="search-activities results">
            {renderActivities()}
        </div>
        )
    
}

export default SearchActivitiesContainer