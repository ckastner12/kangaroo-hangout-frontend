import React from 'react';
import ActivityCard from '../presentational/ActivityCard';


const SearchActivitiesContainer = props => {

    const renderActivities = () => {
        return props.activities.map(activity => {
            return <ActivityCard activity={activity} />
        })
    }

    return (
        <div className="search-activities results">
            {renderActivities()}
        </div>
        )
    
}

export default SearchActivitiesContainer