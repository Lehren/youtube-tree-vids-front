import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import PropTypes from "prop-types";
import "./VideoList.css";

class VideoList extends Component {
  render() {
    const videos = this.props.videos;
    return (
      <ListGroup bsClass="list-inline">
        {videos.map(entry => {
          const link = `http://www.youtube.com/watch/?v=${entry.id.videoId}`;
          return (
            <ListGroupItem key={entry.id.videoId}>
              <a href={link}>
                <img
                  src={entry.snippet.thumbnails.default.url}
                  alt={entry.snippet.title}
                />
                <p>{entry.snippet.title}</p>
              </a>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }
}

VideoList.propTypes = {
  videos: PropTypes.array
};

export default VideoList;
