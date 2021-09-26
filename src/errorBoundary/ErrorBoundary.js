import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            error: false
        }
    }
    static getDerivedStateFromError() {
        return { error: true }
    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }
    render() {
        return (
            <div>
                {this.state.error ? <h2>Opps ! there is some error</h2> : this.props.children}
            </div>
        )
    }
}
