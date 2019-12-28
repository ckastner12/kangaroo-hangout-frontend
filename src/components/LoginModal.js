import React from 'react'
import { Button, Header, Image, Modal , Form, Divider} from 'semantic-ui-react'

const LoginModal = (props) => (
    <Modal open={true} size="small">
        <Modal.Header>Log in/Sign up</Modal.Header>
        <Modal.Content image>
        <Modal.Description>
            <Form >
                <Form.Field >
                    <label>Email</label>
                    <input placeholder="Email" />
                </Form.Field>
                <Form.Field >
                    <label>Password</label>
                    <input placeholder="Password" />
                </Form.Field>
                <Form.Button className="login" fluid={true} color="green">Login</Form.Button>
            </Form>
            <Divider horizontal>Or</Divider>
            <Header>Sign Up</Header>
            <Form>
            <Form.Field >
                    <label>Name</label>
                    <input placeholder="Name" />
                </Form.Field>
            <Form.Field >
                    <label>Email</label>
                    <input placeholder="Email" />
                </Form.Field>
                <Form.Field >
                    <label>Password</label>
                    <input placeholder="Password" />
                </Form.Field>
                <Form.Field >
                    <label>Password Confirmation</label>
                    <input placeholder="Password Confirmation" />
                </Form.Field>
                <Form.Button className="login" fluid={true} color="yellow">Sign Up</Form.Button>
            </Form>
        </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default LoginModal