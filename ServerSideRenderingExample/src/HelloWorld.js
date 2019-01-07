import React, { Component } from 'react';

class HelloWorld extends Component {

    showAlert() {
        alert('Hello there!');
    }

    constructor(props) {
        super(props);

        let data;
        if (this.props.initialData) {
            data = this.props.initialData;
        } else {
            data = window.__initialData__;
            delete window.__initialData__;
        }

        this.state = {initialData: data};
    }

    render() {
        return (
            <div>
                <h1> Hello there. This is coming from server. </h1>
                <br />
                <br />
                <div style = {{height: 500, width: 500, background: 'cyan'}} onClick = {this.showAlert}>
                    Click me for the alert!
                </div>
            </div>
        );
    }
}

export default HelloWorld;