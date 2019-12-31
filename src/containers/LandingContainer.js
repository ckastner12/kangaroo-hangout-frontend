import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class LandingContainer extends React.Component {

    render() {
        return (
            <div>
                <Link to="/events/new">TO THE EVENTS!</Link>
            </div>
        )
    }
}