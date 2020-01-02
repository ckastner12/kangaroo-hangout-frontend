import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import CreateEvent from './CreateEvent';
import UserShow from './UserShow'
import LandingPage from './LandingPage'
import {Button} from 'semantic-ui-react'
import NavBar from './components/NavBar'
import LoginModal from './components/LoginModal';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedin: !!localStorage["id"],
      modal: false
    }
  }

  handleLogout = () => {
    this.setState({
      loggedin: false
    }, () => {
      localStorage.clear()
    })
  }

  handleLogin = () => {
    this.setState({
      modal: true
    })
  }

  onClickOut = () => {
    this.setState({
      modal: false
    })
  }

  handleOnLogin = (login) => {
    this.fetchUser("http://localhost:3001/users/login", login)
        .then(this.loginCallBack)
}

  handleOnSignup = (login) => {
      this.fetchUser("http://localhost:3001/users", login)
          .then(this.loginCallBack)
  }

  fetchUser = (path, user) => {
      return fetch(path, {
          method: "POST",
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
      })
          .then(resp => resp.json())
  }

  loginCallBack = (json) => {
      if (json.message !== "Failed Fetch") {
          this.setState({
              loggedin: true,
              modal: false
          }, () => {
              localStorage.setItem('id', json.user.id)
              localStorage.setItem('email', json.user.email)
              
          })
      } else {
          console.log(json)
      }
  }

  render() {
    return (
        <Router>
          <LoginModal 
                        modal={this.state.modal} 
                        handleOnLogin={this.handleOnLogin} 
                        handleOnSignup={this.handleOnSignup} 
                        onClickOut={this.onClickOut}
                        />
          <NavBar loggedin={this.state.loggedin} handleLogin={this.handleLogin} handleLogout={this.handleLogout}/>
          <Route exact path="/" component={LandingPage} />
          <Route path="/events/new" component={() => <CreateEvent 
                                                        handleLogin={this.handleLogin} 
                                                      />} />
          <Route path="/user" >
            {this.state.loggedin ? <UserShow userId={`${localStorage["id"]}`}/>
              : <Redirect to="/" />}
          </Route>
        </Router>
    )
  }
  
  };

export default App;
