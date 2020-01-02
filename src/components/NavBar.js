import React from 'react';
import {Menu, Button} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

class NavBar extends React.Component {

    conditionalUserLink = () => {
        if (this.props.loggedin) {
            return (
                <>
                    <NavLink exact to="/user" >
                        <Menu.Item name='profile'>
                            Profile
                        </Menu.Item>
                    </NavLink>
                    <Menu.Item name="login" onClick={this.props.handleLogout}>
                        Log out
                    </Menu.Item>
                </>
            ) 
        } else {
            return (
                <Menu.Item name="login" onClick={this.props.handleLogin}>
                    Log in
                </Menu.Item>
            )
        }
    }
    
    render() {
        return (
            <Menu >
                <NavLink exact to="/" >
                    <Menu.Item name='home'>
                        Home
                    </Menu.Item>
                </NavLink>
                <NavLink exact to="/events/new" >
                    <Menu.Item name='new'>
                        Create Event
                    </Menu.Item>
                </NavLink>
                <Menu.Menu position="right" >
                    {this.conditionalUserLink()}
                </Menu.Menu>
            </Menu>
        )
    }
}

export default NavBar