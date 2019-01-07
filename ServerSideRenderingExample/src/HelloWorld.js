import React, { Component } from 'react';

class HelloWorld extends Component {

    showAlert() {
        alert('Hello there!');
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1> Hello World. This is coming from server. </h1>
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