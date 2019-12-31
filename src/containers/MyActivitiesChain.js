import React from 'react';
import ActivityCard from '../presentational/ActivityCard'

const MyActivitiesChain = props => {
    const renderMyActivities = () => {
        return props.myActivities.map(activity => {
            return <ActivityCard 
                className="my-activity" 
                handleRemove={props.handleAdd} 
                activity={activity} />
        })
    }

    return (
        <div className="activity-chain">
            {props.myActivities ? renderMyActivities() : []}
        </div>
    )
}

export default MyActivitiesChain