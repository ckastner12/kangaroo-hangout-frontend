import React from 'react'

const withLogin = (WrappedComponent) => {
    class WithLogin extends React.Component {
        constructor() {
            super()
            this.state = {
                open: false
            }
        }

        trigger = () => {
            this.setState({
                open: true
            })
        }

        render() {
            return <WrappedComponent open={this.state.open}/>
        }
    }
    return WithLogin
}

export default withLogin