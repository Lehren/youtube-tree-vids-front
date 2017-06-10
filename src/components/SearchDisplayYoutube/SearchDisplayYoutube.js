import React, { Component } from "react";
import EmbeddedYoutube from "../EmbeddedYoutube/EmbeddedYoutube";
import InputBar from "../InputBar/InputBar";

class SearchDisplayYoutube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      url: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  onKeyPress(keyEvent) {
    if (keyEvent.key === "Enter") {
      this.setState({
        url: this.state.value
      });
    }
  }

  render() {
    return (
      <div>
        <InputBar
          text="Enter Youtube URL"
          value={this.state.value}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
        <EmbeddedYoutube url={this.state.url} />
      </div>
    );
  }
}

export default SearchDisplayYoutube;
