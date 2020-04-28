import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import CreateEvent from './CreateEvent';
import UserShow from './UserShow'
import LandingContainer from './containers/LandingContainer'
import NavBar from './components/NavBar'

const App = () => {
  return (
      <Router>
        <Route path="/" component={(routerProps) => <NavBar {...routerProps}/>} />
        <Route exact path="/" component={(routerProps) => <LandingContainer {...routerProps} />} />
        <Route path="/events/new" component={(routerProps) => <CreateEvent {...routerProps}
                                                    />} />
        <Route path="/user" component={() => {
          if (localStorage["token"]) {
            return <UserShow />
          } else {
            return <Redirect to="/"/>
          }
        }} />
      </Router>
  )
};

export default App;
