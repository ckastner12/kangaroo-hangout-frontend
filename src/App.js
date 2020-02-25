import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import CreateEvent from './CreateEvent';
import UserShow from './UserShow'
import LandingPage from './LandingPage'
import NavBar from './components/NavBar'
import LoginModal from './components/LoginModal';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedin: !!localStorage["token"],
      modal: false
    }
  }

  openModal = () => {
    this.setState({
      modal: true
    })
  }

  handleLogin = () => {
    this.setState({
      loggedin: true
    })
  }

  handleLogout = () => {
    this.setState({
      loggedin: false
    })
    localStorage.clear()
  }

  onClickOut = () => {
    this.setState({
      modal: false
    })
  }

  render() {
    return (
        <Router>
          <LoginModal   
                        error={this.state.error}
                        modal={this.state.modal} 
                        onClickOut={this.onClickOut}
                        handleLogin={this.handleLogin}
                        />
          <NavBar loggedin={this.state.loggedin} openModal={this.openModal} handleLogout={this.handleLogout}/>
          <Route exact path="/" component={LandingPage} />
          <Route path="/events/new" component={(routerProps) => <CreateEvent {...routerProps}
                                                        openModal={this.openModal}  
                                                      />} />
          <Route path="/user" >
            {this.state.loggedin ? <UserShow 
                                      handleLogout={this.handleLogout}
                                      />
              : <Redirect to="/" />}
          </Route>
        </Router>
    )
  }
};

export default App;
