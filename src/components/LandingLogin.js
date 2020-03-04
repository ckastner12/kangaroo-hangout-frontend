import React from 'react'
import { Button } from 'semantic-ui-react'
import withLogin from './HOC/withLogin'

const LandingLogin = props => {
    const renderButton = () => {
        if (props.loggedIn) {
            return (
                <Button color="red" onClick={props.eventLink} >
                    Get Started!
                </Button>
            )
        } else {
            return (
                <Button color="red" onClick={props.toggle}>
                    Sign Up!
                </Button>
            )
        }
    }

    return (
        <>
            {renderButton()}
        </>
    )
}

export default withLogin(LandingLogin)