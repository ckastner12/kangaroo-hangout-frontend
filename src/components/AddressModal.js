import React from 'react';
import {Form, Button} from 'semantic-ui-react'

const AddressModal = props => {
    return (
        <Form>
            <Form.Field onChange={props.handleOnChange}>
                <label>Address</label>
                <input placeholder="Address" id="location"/>
            </Form.Field>
            <Button onClick={props.handleSetAddress} fluid={true} color="yellow">
                Search By This Address
            </Button>
        </Form>
    )
}

export default AddressModal