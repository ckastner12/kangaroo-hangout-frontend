import React from 'react'
import { Menu } from 'semantic-ui-react'
import withLogin from './HOC/withLogin'

class Navlogin extends React.Component {
    render() {
        return (
            <Menu.Item onClick={this.props.toggle}>
                Login
            </Menu.Item>
        )
    }
}

export default withLogin(Navlogin)