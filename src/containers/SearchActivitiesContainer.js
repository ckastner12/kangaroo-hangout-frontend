import React from 'react';
import ActivityCard from '../presentational/ActivityCard';
import Loader from '../components/Loader'

const SearchActivitiesContainer = props => {

    const renderActivities = () => {
        return props.activities ? props.activities.map(activity => {
            return <ActivityCard 
                activity={activity} 
                key={activity.id}
                handleSelectPlace={props.handleSelectPlace}
                handleAdd={props.handleAdd} />
        }) : <h3 className="no-results">No Results</h3>
    }

    return (
        <div className="search-activities results">
            {props.loading ? <Loader /> : renderActivities()}
        </div>
        )
    
}

export default SearchActivitiesContainer