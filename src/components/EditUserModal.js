import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const EditUserModal = props => {

    return (
        <Form>
            <Form.Field onChange={props.handleOnChange}>
                <label>Name</label>
                <input value={props.name} id="name"/>
            </Form.Field>
            <Form.Field onChange={props.handleOnChange}>
                <label>Email</label>
                <input value={props.email} id="name"/>
            </Form.Field>
            <Form.Group >
                <Button onClick={props.handleEditUser} color="green">
                    Submit
                </Button>
                <Button onClick={props.handledeleteuser} color="red">
                    Delete
                </Button>
            </Form.Group>
        </Form>
    )
}

export default EditUserModal