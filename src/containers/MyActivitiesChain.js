import React from 'react';
import ActivityCard from '../presentational/ActivityCard'

export default class MyActivitiesChain extends React.Component {
    renderMyActivities = () => {
        return this.props.myActivities.map(activity => {
            return <ActivityCard />
        })
    }

    render() {
        return (
            <div className="my-activities">
                {this.renderMyActivities()}
            </div>
        )
    }
}