import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import PropTypes from "prop-types";

class VideoList extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>Item 1</ListGroupItem>
        <ListGroupItem>Item 2</ListGroupItem>
        <ListGroupItem>...</ListGroupItem>
      </ListGroup>
    );
  }
}

VideoList.propTypes = {
  videos: PropTypes.array
};

export default VideoList;
