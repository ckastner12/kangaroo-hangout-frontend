import React from 'react'
import { Menu } from 'semantic-ui-react'
import withLogin from './HOC/withLogin'
import { NavLink } from 'react-router-dom'

const Navlogin = props => {

    const conditionalUserLink = () => {
        if (props.loggedIn) {
            return (
                <>
                    <NavLink exact to="/user" >
                        <Menu.Item name='profile'>
                            Profile
                        </Menu.Item>
                    </NavLink>
                    <Menu.Item name="login" onClick={props.logout}>
                        Log out
                    </Menu.Item>
                </>
            ) 
        } else {
            return (
                <Menu.Item onClick={props.toggle}>
                    Log in
                </Menu.Item>
            )
        }
    }

    return (
        <>
            {conditionalUserLink()}
        </>
    )
    
}

export default withLogin(Navlogin)