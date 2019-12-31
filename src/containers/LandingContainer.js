import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginModal from '../components/LoginModal'
import Loader from '../components/Loader'

export default class LandingContainer extends React.Component {

    render() {
        return (
            <div>
                <Link to="/events/new">TO THE EVENTS!</Link>
            </div>
        )
    }
}