import React, { useState, useEffect } from 'react';
import { Menu } from 'semantic-ui-react'
import Navlogin from "./Navlogin"
import { NavLink } from 'react-router-dom'

const NavBar = props => {
    const [loggedIn, setLoggedIn] = useState(!!localStorage["token"])

    useEffect (() => {
        if (loggedIn !== !!localStorage["token"]) {
            setLoggedIn(!!localStorage["token"])
        }
    })

    const conditionalUserLink = () => {
        if (localStorage["token"]) {
            return (
                <>
                    <NavLink exact to="/user" >
                        <Menu.Item name='profile'>
                            Profile
                        </Menu.Item>
                    </NavLink>
                    <Menu.Item name="login" onClick={localStorage.clear}>
                        Log out
                    </Menu.Item>
                </>
            ) 
        } else {
            return (
                <Navlogin />
                )
            }
    }

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
                {conditionalUserLink()}
            </Menu.Menu>
        </Menu>
    )
}

export default NavBar