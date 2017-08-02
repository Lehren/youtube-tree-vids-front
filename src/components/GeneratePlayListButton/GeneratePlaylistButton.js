import React, { Component } from "react";
import { Button } from "react-bootstrap";
import * as settings from "../../settings.json";
import * as axios from "axios";

class GeneratePlaylistButton extends Component {
  constructor(props) {
    super(props);
    this.onGeneratePlaylistClick = this.onGeneratePlaylistClick.bind(this);
  }

  onGeneratePlaylistClick() {
    const url = new URL(
      "https://www.googleapis.com/youtube/v3/search" +
        "?part=snippet" +
        "&relatedToVideoId=1" +
        "&type=video" +
        "&key=2" +
        "&maxResults=20"
    );
    url.searchParams.set("key", settings.API_KEY);
    url.searchParams.set("relatedToVideoId", this.props.videoId);
    axios
      .get(url)
      .then(result => {
        console.log("result", result);
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  }

  render() {
    return (
      <Button bsSize="large" block onClick={this.onGeneratePlaylistClick}>
        Generate Playlist
      </Button>
    );
  }
}

export default GeneratePlaylistButton;
