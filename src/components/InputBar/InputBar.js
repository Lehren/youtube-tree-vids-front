import React, { Component } from "react";
import { FormControl, FormGroup } from "react-bootstrap";

class InputBar extends Component {
  render() {
    return (
      <form>
        <FormGroup controlId="formInput">
          <FormControl
            type="text"
            value={this.props.value}
            placeholder={this.props.text}
            onChange={this.props.onChange}
          />
        </FormGroup>
      </form>
    );
  }
}

export default InputBar;
