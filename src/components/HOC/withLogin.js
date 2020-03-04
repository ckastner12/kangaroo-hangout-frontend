import React from 'react'
import { Header, Modal , Form, Divider} from 'semantic-ui-react'
import { api } from '../../services/api'

const withLogin = (WrappedComponent) => {
    class WithLogin extends React.Component {
        constructor() {
            super()
            this.state = {
                open: false,
                login: {
                    email: "",
                    password: ""
                },
                signup: {
                    email: "",
                    name: "",
                    password: ""
                },
                error: "",
                loggedIn: !!localStorage["token"]
            }
        }

        handleOnSignupChange = (event) => {
            event.persist()
            this.setState(prevState => {
                return {
                    signup: {
                        ...prevState.signup,
                        [event.target.id]: event.target.value
                    }
                }
            })
        }

        handleOnLoginChange = (event) => {
            event.persist()
            this.setState(prevState => {
                return {
                        login: {
                        ...prevState.signup,
                        [event.target.id]: event.target.value
                    }
                }
            })
        }

        handleLoginClick = () => {
            api.auth.login({ user: this.state.login })
                .then(json => {
                    if (json.error) {
                        this.setState({
                            error: json.error
                        })
                    } else {
                        localStorage.setItem('token', json.jwt)
                        this.handleLogin()
                    }
                })
        }

        handleSignupClick = () => {
            api.user.signup({user: this.state.signup})
                .then(json => {
                    if (json.error) {
                        this.setState({
                            error: json.error
                        })
                    } else {
                        localStorage.setItem('token', json.user.jwt)
                        this.handleLogin()
                    }
                })
    
        }

        handleLogout = () => {
            localStorage.clear()
            this.setState({loggedIn: false})
            this.props.history.push('/')
        }

        handleLogin = () => {
            this.toggle()
            this.setState({loggedIn: true})
        }

        toggle = () => {
            this.setState({
                open: !this.state.open
            })
        }

        eventLink = () => {
            this.props.history.push('/events/new')
        }

        render() {
            return (
                <>
                    <WrappedComponent 
                    toggle={this.toggle}
                    logout={this.handleLogout}
                    loggedIn={this.state.loggedIn}
                    eventLink={this.eventLink}
                    />
                    <Modal size="small" open={this.state.open} onClose={this.toggle} closeOnDimmerClick={true}>
                    <Modal.Header>Log in/Sign up</Modal.Header>
                        <Modal.Content image>
                        <Modal.Description>
                            <p style={{color: "red"}}>{`${this.state.error}`}</p>
                            <Form onChange={this.handleOnLoginChange} key="login">
                                <Form.Field >
                                    <label>Email</label>
                                    <input placeholder="Email" id="email"/>
                                </Form.Field>
                                <Form.Field >
                                    <label>Password</label>
                                    <input placeholder="Password" type="password" id="password"/>
                                </Form.Field>
                                <Form.Button onClick={this.handleLoginClick} className="login" fluid={true} color="green">Login</Form.Button>
                            </Form>
                            <Divider horizontal>Or</Divider>
                            <Header>Sign Up</Header>
                            <Form onChange={this.handleOnSignupChange} key="signup">
                            <Form.Field >
                                    <label>Name</label>
                                    <input placeholder="Name" id="name"/>
                                </Form.Field>
                            <Form.Field >
                                    <label>Email</label>
                                    <input placeholder="Email" id="email"/>
                                </Form.Field>
                                <Form.Field >
                                    <label>Password</label>
                                    <input type="password" id="password"/>
                                </Form.Field> 
                                <Form.Button className="login" onClick={this.handleSignupClick} fluid={true} color="yellow">Sign Up</Form.Button>
                            </Form>
                        </Modal.Description>
                        </Modal.Content>
                    </Modal>
                </>
            )
        }
    }

    return WithLogin
}

export default withLogin