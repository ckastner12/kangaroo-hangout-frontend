import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateEvent from './CreateEvent';
import UserShow from './UserShow'
import LandingPage from './LandingPage'
import {Icon, Button} from 'semantic-ui-react'
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
            localStorage: true,
            modal: false
        }, () => {
            localStorage.setItem('id', json.user.id)
            localStorage.setItem('email', json.user.email)
            
        })
    } else {
        console.log(json)
    }
}

  renderLoginOptions = () => {
    return this.state.loggedin ? <Button onClick={handleLogout}>Log out</Button> 
    : <Button onClick={handleLogin}>Log in</Button>
  }

  render() {
    return (
      <>
      <LoginModal 
                    modal={this.state.modal} 
                    handleOnLogin={this.handleOnLogin} 
                    handleOnSignup={this.handleOnSignup} />
      {this.renderLoginOptions}
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/events/new" component={CreateEvent} />
        <Route path="/users/:id" component={UserShow} />
      </Router>
      </>
    )
  }
  
  };

export default App;
