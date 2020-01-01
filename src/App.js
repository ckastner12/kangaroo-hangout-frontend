import React from 'react';
import './App.css';
import ExploreContainer from "./containers/ExploreContainer"
import LandingContainer from "./containers/LandingContainer"

function App() {
  return (
    <Router>
        <Route exact path="/" component={App} />
        <Route path="/events/new" component={CreateEvent} />
        <Route path="/users/:id" component={UserShow} />
    </Router>)
  );
}

export default App;
