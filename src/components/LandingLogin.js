import React from 'react'
import { Button } from 'semantic-ui-react'
import withLogin from './HOC/withLogin'

const LandingLogin = props => {
    return (
        <Button color="red" onClick={props.toggle}>
            Sign Up!
        </Button>
    )
}

export default withLogin(LandingLogin)