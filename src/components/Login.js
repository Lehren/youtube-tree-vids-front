import React, {Component} from "react";
import {Button, FormGroup, Form, FormControl} from "react-bootstrap";

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    attemptLogin() {
        alert('Attempting login woo');
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <Form inline>
                <FormGroup controlId="loginForm" bsSize="small">
                    <FormControl
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder="username"
                    />
                    <FormControl
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        placeholder="password"
                    />
                </FormGroup>
                <Button bsSize="small" onClick={this.attemptLogin}>Login</Button>
            </Form>
        )
    }
}

export default LoginComponent;