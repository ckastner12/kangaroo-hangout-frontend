import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CreateEvent from './CreateEvent';
import UserShow from './UserShow'
import LandingPage from './LandingPage'

class App extends React.Component {

  render() {
    return (
      <>
        <Route exact path="/" component={LandingPage} />
        <Route path="/events/new" component={CreateEvent} />
        <Route path="/users/:id" component={UserShow} />
      </>
    )
  }
  
  };

export default App;
