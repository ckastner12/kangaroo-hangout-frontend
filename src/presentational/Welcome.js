import React from 'react';

const Welcome = props => {
    return (
        <>
        <h2>Welcome, {props.name ? props.name : ""}</h2>
        <h3>Ready to Hang?</h3>
        </>
    )
}

Welcome.defaultProps = {
    name: ""
}

export default Welcome