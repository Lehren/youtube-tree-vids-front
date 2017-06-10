import React, { Component } from "react";
import { FormControl, FormGroup } from "react-bootstrap";

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <form>
        <FormGroup controlId="formInput">
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.props.text}
            onChange={this.handleChange}
            onKeyPress={this.props.onKeyPress}
          />
        </FormGroup>
      </form>
    );
  }
}

export default InputBar;
