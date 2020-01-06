import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class EditUserModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.user
        }
    }
    

    handleOnChange = (event) => {
        const {id, value} = event.target
        this.setState({
            user: {...this.state.user, [id]: value}
        })
    }

    render() {
        const {name, email} = this.state.user
        return (
            <Form onChange={this.handleOnChange}>
                <Form.Field >
                    <label>Name</label>
                    <input value={name} id="name"/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input value={email} id="email"/>
                </Form.Field>
                <Form.Group >
                    <Button onClick={() => this.props.handleEditUser(this.state.user)} color="green">
                        Submit
                    </Button>
                    <Button onClick={this.props.handleDeleteUser} color="red">
                        Delete
                    </Button>
                </Form.Group>
            </Form>
        )
    }
    
}

export default EditUserModal