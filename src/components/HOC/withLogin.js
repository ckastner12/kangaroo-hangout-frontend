import React from 'react'
import { Header, Modal , Form, Divider} from 'semantic-ui-react'
import { api } from "../../services/api"

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

        handleChange = (type) => {
            return (e, {name, value}) => {
                this.setState({[type] : { ...this.state[type], [name]: value }})
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
                .catch(console.log)
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
            const {signup, login} = this.state
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
                            <span style={{color: "red"}}>{`${this.state.error}`}</span>
                            <Form key="login">
                                <Form.Input 
                                    placeholder="Email"
                                    name="email"
                                    value={login.email}
                                    onChange={this.handleChange("login")} />
                                <Form.Input 
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    value={login.password}
                                    onChange={this.handleChange("login")} />
                                <Form.Button data-testid="login-btn" onClick={this.handleLoginClick} className="login" fluid={true} color="green">Login</Form.Button>
                            </Form>
                            <Divider horizontal>Or</Divider>
                            <Header>Sign Up</Header>
                            <Form key="signup">
                                <Form.Input 
                                    placeholder="Name"
                                    name="name"
                                    value={signup.name}
                                    onChange={this.handleChange("signup")} />
                                <Form.Input 
                                    placeholder="Email"
                                    name="email"
                                    value={signup.email}
                                    onChange={this.handleChange("signup")} />
                                <Form.Input 
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    value={signup.password}
                                    onChange={this.handleChange("signup")} />
                                <Form.Button data-testid="signup-btn" className="login" onClick={this.handleSignupClick} fluid={true} color="yellow">Sign Up</Form.Button>
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