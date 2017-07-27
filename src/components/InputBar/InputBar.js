import React, { Component } from "react";
import { FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

class InputBar extends Component {
  render() {
    return (
      <FormControl
        type="text"
        value={this.props.value}
        placeholder={this.props.text}
        onChange={this.props.onChange}
        onKeyPress={this.props.onKeyPress}
      />
    );
  }
}

InputBar.propTypes = {
  value: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
};

export default InputBar;
