import React, { Component } from "react";
import { Col, ResponsiveEmbed, Row } from "react-bootstrap";
import Youtube from "react-youtube";

class EmbeddedYoutube extends Component {
  render() {
    const opts = {
      playerVars: {
        iv_load_policy: 3,
        rel: 0
      }
    };
    return (
      <Row>
        <Col xs={2} />
        <Col xs={8}>
          <ResponsiveEmbed a16by9>
            <Youtube videoId={this.props.url} opts={opts} />
          </ResponsiveEmbed>
        </Col>
        <Col xs={2} />
      </Row>
    );
  }
}

export default EmbeddedYoutube;
