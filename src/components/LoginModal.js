import React from 'react'
import { api } from '../services/api'
import { Button, Header, Image, Modal , Form, Divider, Icon} from 'semantic-ui-react'

class LoginModal extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            login: {
                email: "",
                password: ""
            },
            signup: {
                email: "",
                name: "",
                password: ""
            }
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
        this.setState({
            login: {
                email: event.target.value
            }
        })
    }

    handleLoginClick = () => {
        api.auth.login(this.state.login)
    }

    handleSignupClick = () => {
        api.user.signup({user: this.state.signup})
            .then(json => {
                localStorage.setItem('token', json.user.jwt)
                this.props.onClickOut()
            })
    }

    render() {
        return (
            <Modal open={this.props.modal} size="small">
                <Modal.Header><Icon name="times" onClick={this.props.onClickOut}/>Log in/Sign up</Modal.Header>
                <Modal.Content image>
                <Modal.Description>
                    <Form onChange={this.handleOnLoginChange} key="login">
                        <Form.Field >
                            <label>Email</label>
                            <input placeholder="Email" id="email"/>
                        </Form.Field>
                        <Form.Field >
                            <label>Password</label>
                            <input placeholder="Password" />
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
        )
    }
}

export default LoginModal