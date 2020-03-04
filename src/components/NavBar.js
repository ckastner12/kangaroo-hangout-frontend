import React from 'react';
import { Menu } from 'semantic-ui-react'
import Navlogin from "./Navlogin"
import { NavLink } from 'react-router-dom'

const NavBar = props => {
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
                <Navlogin history={props.history} />
            </Menu.Menu>
        </Menu>
    )
}

export default NavBar