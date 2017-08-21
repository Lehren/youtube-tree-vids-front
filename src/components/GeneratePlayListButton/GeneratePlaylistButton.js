import React, { Component } from "react";
import { Button } from "react-bootstrap";
import * as settings from "../../settings.json";
import * as axios from "axios";

class GeneratePlaylistButton extends Component {
  constructor(props) {
    super(props);
    this.onGeneratePlaylistClick = this.onGeneratePlaylistClick.bind(this);
    this.buildPlaylistRecursively = this.buildPlaylistRecursively.bind(this);
  }

  onGeneratePlaylistClick() {
    const url = new URL(
      "https://www.googleapis.com/youtube/v3/search" +
        "?part=snippet" +
        "&relatedToVideoId=1" +
        "&type=video" +
        "&key=2" +
        "&maxResults=1"
    );
    url.searchParams.set("key", settings.API_KEY);
    let results = [];
    this.buildPlaylistRecursively(url, this.props.videoId, results).then(() => {
      this.props.onGeneratedVideos(results);
    });
  }

  buildPlaylistRecursively(url, id, results) {
    if (results.length >= 20) return;
    url.searchParams.set("relatedToVideoId", id);
    return axios
      .get(url)
      .then(result => {
        results.push(result.data.items[0]);
        return this.buildPlaylistRecursively(
          url,
          result.data.items[0].id.videoId,
          results
        );
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
