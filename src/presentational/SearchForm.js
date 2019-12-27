import React from 'react'
import {Button, Form, Checkbox} from 


const SearchForm = props => {
    return (
        <Form>
            <Form.Field>
                <label>Search</label>
                <input placeholder="Search" />
            </Form.Field>
            <Form.Field label='Type' control='select'>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </Form.Field>

        </Form>
    )
}