import React, { Component } from "react";
import { FormControl } from "react-bootstrap";

class InputBar extends Component {
  render() {
    return (
      <FormControl
        type="text"
        value={this.props.value}
        placeholder={this.props.text}
        onChange={this.props.onChange}
      />
    );
  }
}

export default InputBar;
