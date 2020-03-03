import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import CreateEvent from './CreateEvent';
import UserShow from './UserShow'
import LandingContainer from './containers/LandingContainer'
import NavBar from './components/NavBar'

const App = () => {

  return (
      <Router>
        <NavBar />
        <Route exact path="/" component={(routerProps) => <LandingContainer {...routerProps} />} />
        <Route path="/events/new" component={(routerProps) => <CreateEvent {...routerProps}
                                                    />} />
        <Route path="/user" >
          {localStorage["token"] ? <UserShow 
                                    />
            : <Redirect to="/" />}
        </Route>
      </Router>
  )
};

export default App;
