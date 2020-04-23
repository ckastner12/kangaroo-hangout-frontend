import React from 'react';
import ActivityCard from '../presentational/ActivityCard'
import "./styles/MyActivitiesChain.css"

const MyActivitiesChain = props => {
    const renderMyActivities = () => {
        return props.myActivities.map(activity => {
            return (<li>
                    <ActivityCard 
                    className="my-activity" 
                    handleRemove={props.handleRemove} 
                    activity={activity} />
                </li>)
        })
    }

    return (
        <div className="activity-chain">
            <ul>
                {props.myActivities ? renderMyActivities() : []} 
            </ul>
        </div>
    )
}

export default MyActivitiesChain