import React, { Component } from 'react';

class ErrorBoundry extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }
    //  React Component provide this error
    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error })
    }

    render() {
        if (this.state.hasError) {
            return this.state.errorMessage;
        } else {
            return this.props.children;
        }

    }
}
export default ErrorBoundry;