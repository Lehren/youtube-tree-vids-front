import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import EmbeddedYoutube from "../EmbeddedYoutube/EmbeddedYoutube";
import InputBar from "../InputBar/InputBar";

class SearchDisplayYoutube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      url: ""
    };
    this.youtubeURLRegex = /^https?:\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:\S+\/)?(?:[^\s/]*(?:\?|&)vi?=)?([^#?&]+)/;

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
      const enteredString = this.state.value;
      const matches = enteredString.match(this.youtubeURLRegex);
      if (matches && matches[1].length === 11) {
        this.setState({
          url: matches[1]
        });
      }
    }
  }

  render() {
    return (
      <div>
        <Row className="bottom-margin">
          <Col>
            <InputBar
              text="Enter Youtube URL"
              value={this.state.value}
              onChange={this.onChange}
              onKeyPress={this.onKeyPress}
            />
          </Col>
        </Row>
        <Row className="bottom-margin">
          <Col>
            <EmbeddedYoutube url={this.state.url} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchDisplayYoutube;
