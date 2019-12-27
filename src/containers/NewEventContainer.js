import React from 'react';
import DisplayActivitiesContainer from './DisplayActivitiesContainer';


export default class NewEventContainer extends React.Component {


    render() {
        return (
            <>
                <MyActivitiesChain />
                <DisplayActivitiesContainer />
            </>
        )
    }
}