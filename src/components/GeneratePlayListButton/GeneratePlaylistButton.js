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
        "&maxResults=3"
    );
    url.searchParams.set("key", settings.API_KEY);
    let results = [];
    let visitedVideos = {};
    let counter = 1;
    visitedVideos[this.props.videoId] = this.props.videoId;
    this.buildPlaylistRecursively(
      url,
      counter,
      this.props.videoId,
      results,
      visitedVideos
    ).then(() => {
      this.props.onGeneratedVideos(results);
    });
  }

  buildPlaylistRecursively(url, maxResults, id, results, visitedVideos) {
    if (results.length >= 20) return;
    url.searchParams.set("relatedToVideoId", id);
    url.searchParams.set("maxResults", maxResults);
    return axios
      .get(url)
      .then(result => {
        let currentVideoId = result.data.items[0].id.videoId;
        let i = 0;
        while (visitedVideos[currentVideoId] !== undefined) {
          i = i + 1;
          currentVideoId = result.data.items[i].id.videoId;
        }
        visitedVideos[currentVideoId] = currentVideoId;

        results.push(result.data.items[i]);
        return this.buildPlaylistRecursively(
          url,
          maxResults + 1,
          currentVideoId,
          results,
          visitedVideos
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
