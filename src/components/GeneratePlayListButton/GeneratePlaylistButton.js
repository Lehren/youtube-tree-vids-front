import React, { Component } from "react";
import { Button } from "react-bootstrap";

class GeneratePlaylistButton extends Component {
  constructor(props) {
    super(props);
    this.onGeneratePlaylistClick = this.onGeneratePlaylistClick.bind(this);
  }

  onGeneratePlaylistClick(event) {}

  render() {
    return (
      <Button bsSize="large" block onClick={this.onGeneratePlaylistClick}>
        Generate Playlist
      </Button>
    );
  }
}

export default GeneratePlaylistButton;
