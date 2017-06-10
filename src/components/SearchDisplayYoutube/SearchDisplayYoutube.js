import React, { Component } from "react";
import EmbeddedYoutube from "../EmbeddedYoutube/EmbeddedYoutube";
import InputBar from "../InputBar/InputBar";

class SearchDisplayYoutube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      url: event.target.value
    });
  }

  render() {
    return (
      <div>
        <InputBar
          text="Enter Youtube URL"
          value={this.state.url}
          onChange={this.onChange}
        />
        <EmbeddedYoutube url={this.state.url} />
      </div>
    );
  }
}

export default SearchDisplayYoutube;
